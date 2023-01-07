from flask import Flask
from flask_cors import cross_origin
app = Flask(__name__)

@app.route("/ask")
@cross_origin()

def Ask() : 
    return {"answer" : ['1','2','3']}


if __name__ == '__main__' :
    app.run(debug=True)