#coding=utf8
import sys
reload(sys)
sys.defaultencoding="utf8"
from distutils.core import setup
import py2exe
import tornado
import flask
import whoosh
extra_modules = ["flask","whoosh",'tornado']

options = {"py2exe":

                {

                 "bundle_files":1,
                 "ascii": False,
                 "dll_excludes": extra_modules,
                }
          }
setup(
    version = "0.0.1",
    description = "Search",
    name = "TED_Retrivel",
    options = options,
    console = ["tornado_server.py","build_index.py"]
)