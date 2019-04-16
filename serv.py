
from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify

app = Flask(__name__)
api = Api(app)

CORS(app)

@app.route("/")
def hello():
    return jsonify({'text':'Hello Worldl!'})

class TestPath(Resource):
    def get(self):
        return jsonify({'text':'Hello World test!'})
       


api.add_resource(TestPath, '/test') # Route_1



if __name__ == '__main__':
   app.run(port=5002)
