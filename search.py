#coding=utf8

import os
import codecs
import json
import re
import time

# import jieba
# from jieba.analyse.analyzer import ChineseAnalyzer

# from whoosh import index
import lxml.html
from whoosh.fields import Schema, TEXT, ID, NUMERIC
from whoosh.index import create_in, open_dir
from whoosh.qparser import MultifieldParser
from whoosh import scoring

DATA_DIR = './datas/ted_en_tagged'
SOURCE_DIR = './datas/ted_en'
INDEX_DIR = 'index'


def index():
    schema = Schema(path=ID(stored=True),
                    content=TEXT(stored=True),
                    text=TEXT(stored=True)
                    )
    if not os.path.exists(INDEX_DIR):
        os.mkdir(INDEX_DIR)

    ix = create_in(INDEX_DIR, schema)

    writer = ix.writer()

    for f_name in os.listdir(DATA_DIR):
        filename = os.path.join(DATA_DIR, f_name)
        with codecs.open(filename, 'r', 'utf8') as f:
            content = f.read()
        filename = os.path.join(SOURCE_DIR, f_name)

        with codecs.open(filename, 'r', 'utf8') as f:
            html_content = f.read()
            html = lxml.html.fromstring(html_content)
            text = u" ".join([i for i in html.xpath("//p//text()")])

        writer.add_document(path=f_name.decode('utf8'),
                            content=content,
                            text=text)
    writer.commit()


def query(query_phrase):
    if not os.path.exists(INDEX_DIR):
        os.mkdir(INDEX_DIR)

    ix = open_dir(INDEX_DIR)
    with ix.searcher(weighting=scoring.Frequency) as searcher:
        query_term = MultifieldParser(["text","content"], ix.schema).parse(query_phrase)
        results = searcher.search(query_term, limit=150)
        results.fragmenter.surround = 100
        re_json = []
        for e in results:
            highlight = e.highlights("content").encode('utf8')
            highlight += e.highlights("text").encode("utf8")
            re_json.append((e.score, e["path"], highlight))
        rs = sorted(re_json, key=lambda x: x[0], reverse=True)
        res = query_output(rs)
        ix.close()
        return res


def query_output(rs):
    rs_list = []
    for item in rs:
        data = dict()
        url = os.path.join(SOURCE_DIR,item[1])
        title = item[1]
        with open(url) as f:
            content = f.read()
            title2 = re.findall(r'\<h3\>(.*)\<\/h3\>', content)
            if len(title2)>0:
                title = ''.join(title2)
        data["title"] = '<a href="{}">{}</a>'.format(url, title)
        data["hits"] = item[0]

        text = item[2]
        data["text"] = []
        data["tags"] = []
        for sen in text.split("..."):
            word_list = re.findall(r'(?P<match>\<b.*\/b\>)|(?P<word>[^<^ ]+?)_(?P<tags>[\S]+)',sen)
            word_list = [(i[0],i[1],i[2]) if i[1].find(u"\r\n")==-1 else (i[0],i[1],u"\r\n"+i[2]) for i in word_list]
            tag_text = " ".join(["".join((i[0],i[2])) for i in word_list])
            plain_text = " ".join(["".join((i[0],i[1])) for i in word_list])
            data["text"].append(plain_text)
            data["tags"].append(tag_text)
        rs_list.append(data)
    return rs_list


if __name__ == '__main__':
    # index()
    query(u"Duration_NN1")

