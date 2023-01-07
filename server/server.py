from flask import Flask
import openai
from flask_cors import cross_origin
openai.api_key = "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"
app = Flask(__name__)

@app.route("/ask")
@cross_origin()

def Ask() : 
  
    completions = openai.Completion.create(
        engine="text-davinci-003",
        prompt="what is redux",
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
 

    message = completions.choices[0].text
    return  {'answers' : message}


if __name__ == '__main__' :
    app.run(debug=True)