from flask import Flask
from flask import Jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/")
def homepage():
    return "hello world"

if __name__ == "__main__":
    app.run(debug=True)