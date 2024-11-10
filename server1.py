from flask import Flask, jsonify
from flask_cors import CORS
from random import randrange

app = Flask(__name__)
CORS(app)

@app.route("/")
def new_route():
   x = randrange(0, 50, 1)
   data = {'message': f'{x}'}
   return jsonify(data)
