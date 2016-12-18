from functools import wraps
from flask import Flask,request,abort,current_app,jsonify
from search import query
import json

app = Flask(__name__)





def jsonp(func):
    """Wraps JSONified output for JSONP requests."""
    @wraps(func)
    def decorated_function(*args, **kwargs):
        callback = request.args.get('callback', False)
        if callback:
            data = str(func(*args, **kwargs).data)
            content = str(callback) + '(' + data + ')'
            mimetype = 'application/javascript'
            return current_app.response_class(content, mimetype=mimetype)
        else:
            return func(*args, **kwargs)
    return decorated_function



@app.route("/api/query", methods=['GET','POST'])
@jsonp
def query_sth():
    """
    Retrieve
    """
    if request.method == "GET":
        query_term = request.args.get("query_term")
    elif request.method == 'POST':
        query_term = request.form("query_term")
    rs = query(query_term)
    return jsonify({'results' : rs})

if __name__ == '__main__':
    app.run(debug=True)

