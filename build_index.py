# coding=utf8

import os
import codecs
import re
import time

from whoosh.fields import Schema, TEXT, ID
from whoosh.index import create_in
from whoosh.analysis import FancyAnalyzer

DATA_DIR = './datas/ted_en_tagged'
SOURCE_DIR = './datas/ted_en'
INDEX_DIR = 'index'
INDEX_DIR1 = INDEX_DIR+'1'  # 直接检索单词
INDEX_DIR2 = INDEX_DIR+'2'  # 检索高级语法


def index():
    schema1 = Schema(path=ID(stored=True),
                     content=TEXT(
                         stored=True, analyzer=FancyAnalyzer(stoplist=None))
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
        print filename, 'add successfully!'
    writer.commit()
    print INDEX_DIR1, 'index done!'

    ix2 = create_in(INDEX_DIR2, schema2)
    writer2 = ix2.writer()
    for f_name in os.listdir(DATA_DIR):
        filename = os.path.join(DATA_DIR, f_name)
        with codecs.open(filename, 'r', 'utf8') as f:
            content = f.read()
        writer2.add_document(path=f_name.decode('utf8'),
                             content=content)
        print filename, 'add successfully!'
    writer2.commit()
    print INDEX_DIR2, 'index done!'


def main():
    begin_time = time.time()
    index()
    print u'INDEX OK!'
    end_time = time.time()
    print u'spend', end_time-begin_time, 's'


if __name__ == '__main__':
    main()
