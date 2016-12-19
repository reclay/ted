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
from whoosh.qparser import QueryParser
from whoosh import scoring
from whoosh.analysis import FancyAnalyzer

DATA_DIR = './datas/ted_en_tagged'
SOURCE_DIR = './datas/ted_en'
INDEX_DIR = 'index'
INDEX_DIR1 = INDEX_DIR+'1' #直接检索单词
INDEX_DIR2 = INDEX_DIR+'2' #检索高级语法

def index():
    schema1 = Schema(path=ID(stored=True),
                    content=TEXT(stored=True,analyzer=FancyAnalyzer(stoplist=None))
                    )

    schema2 = Schema(path=ID(stored=True),
                    content=TEXT(stored=True)
                    )

    if not os.path.exists(INDEX_DIR1):
        os.mkdir(INDEX_DIR1)
    if not os.path.exists(INDEX_DIR2):
        os.mkdir(INDEX_DIR2)


    ix = create_in(INDEX_DIR1, schema1)
    writer = ix.writer()
    for f_name in os.listdir(DATA_DIR):
        filename = os.path.join(DATA_DIR, f_name)
        with codecs.open(filename, 'r', 'utf8') as f:
            content = f.read()
        writer.add_document(path=f_name.decode('utf8'),
                            content=content)
    writer.commit()

    ix2 = create_in(INDEX_DIR2,schema2)
    writer2 = ix2.writer()
    for f_name in os.listdir(DATA_DIR):
        filename = os.path.join(DATA_DIR, f_name)
        with codecs.open(filename, 'r', 'utf8') as f:
            content = f.read()
        writer2.add_document(path=f_name.decode('utf8'),
                            content=content)
    writer2.commit()



def query(query_phrase,flag):
    query_dir = INDEX_DIR+str(flag)
    ix = open_dir(query_dir)
    print query_dir
    print ix
    with ix.searcher(weighting=scoring.Frequency) as searcher:
        query_term = QueryParser("content", ix.schema).parse(query_phrase)
        results = searcher.search(query_term, limit=150)
        results.fragmenter.surround = 100
	results.fragmenter.charlimit = None
        re_json = []
	print len(results)
        for e in results:
            highlight = e.highlights("content").encode('utf8')
            # highlight += e.highlights("text").encode("utf8")
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
        text = item[2].decode("utf8")
        data["text"] = []
        data["tags"] = []
        for sen in text.split(u"..."):
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
    # query(u"Duration_NN1")
    print query(u"likely",1)
