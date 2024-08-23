from flask import Flask
from flask import jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

from chatbot import get_gpt4_response

@app.route("/")
def homepage():

    return "hello world"


@app.route("/api")
def api():
    response = requests.get("https://jsonplaceholder.typicode.com/todos")
    return response.json()


@app.route("/chat", methods={"GET"})
def chat():
    userMessage = requests.args.get("message")

    


if __name__ == "__main__":
    app.run(debug=True)