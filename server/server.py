from flask import Flask
app = Flask(__name__)

@app.route("/ask")

def Ask() : 
    return {"answer" : ['1','2','3']}


if __name__ == '__main__' :
    app.run(debug=True)