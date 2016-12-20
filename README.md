# ted
这是一个TED的检索系统。
源代码说明:
```
build_index.py # 建立索引
flask_ted.py # flask网站
tornado_server.py # 监听5000端口
index.html # 界面
css/
js/
img/

query.ini #配置文件，其中
    [query]
    results_limit = 150 #检索结果前
    top_hits = 200 #前多少个
    surround = 100 # 上下文

```
## 使用说明
### 使用系统
使用系统运行 search.exe,然后用Chrome打开index.html
### 建立索引
将对应文件放入到datas文件夹中，然后运行build_index.exe等待运行结束即可，可能需要等待一段时间。


