from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)

# Allow all methods and origins for the /api/* routes
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}},
     methods=["GET", "POST"],
     allow_headers=["Content-Type"])

@app.route("/")
def homepage():
    return "hello world"

@app.route("/api")
def api():
    response = requests.get("https://jsonplaceholder.typicode.com/todos")
    return response.json()

@app.route("/api/chat", methods=["POST"]) 
def chat():
    # Example response
    return jsonify({"text": "yeah bro", "timestamp": "2021-12-12", "type": "system"})

if __name__ == "__main__":
    app.run(debug=True)