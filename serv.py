
from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify

import numpy as np
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
from sklearn import tree

app = Flask(__name__)
api = Api(app)

CORS(app)

@app.route("/")
def hello():
    return jsonify({'text':'Hello Worldl!'})

class TestPath(Resource):
    def get(self):
        return jsonify({'text':'Hello World test!'})
       
class PredictType(Resource):
 def get(self,c1,c2,c3,c4,c5):
    balance_data = pd.read_csv( 'dataset.csv',sep= ',', header= None)
    #print ("Dataset Length:: ", len(balance_data))
    #print ("Dataset Shape:: ", balance_data.shape)

    X = balance_data.values[:, 0:5]
    Y = balance_data.values[:,5]

    #print(balance_data.head(5))
    #print(X)
    #print(Y)
    X_train, X_test, y_train, y_test = train_test_split( X, Y, test_size = 0.3, random_state = 100)

    clf_entropy = DecisionTreeClassifier(criterion = "entropy", random_state = 100,
    max_depth=10, min_samples_leaf=15)

    clf_entropy.fit(X_train, y_train)

    x = clf_entropy.predict([[c1,c2,c3,c4,c5]])
    print(x);
    y_pred_en = clf_entropy.predict(X_test)
    y_pred_en

    #return str(x[0]);
    return jsonify({'text':str(x[0])})

api.add_resource(TestPath, '/test') # Route_1
api.add_resource(PredictType, '/predict/<int:c1>/<int:c2>/<int:c3>/<int:c4>/<int:c5>/')



if __name__ == '__main__':
   app.run(port=5002)
