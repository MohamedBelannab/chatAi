from flask import Flask , request
import openai
from flask_cors import cross_origin
openai.api_key = "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"
app = Flask(__name__)

@app.route("/ask")
@cross_origin()

def Ask() : 
    text = request.args['q']
    completions = openai.Completion.create(
        engine="text-davinci-003",
        prompt= text,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
 

    message = completions.choices[0].text
    return  {'q' : text,'answers' : message}


if __name__ == '__main__' :
    app.run(debug=False)