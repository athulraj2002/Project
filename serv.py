
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

class Analysis(Resource):
 def get(self,unino):
	#This is the excel file which contains data about Compiler design course
	series1 = pd.read_excel('CD_2017-18.xlsm',na_values=['NaN'],usecols=[0,1,2,19,20,21],skiprows=[0,1,2,3,4,5,6])
	co_max_marks = pd.read_excel('CD_2017-18.xlsm',usecols=[19,20,21],skiprows=[x for x in range(0,6)])

	co_marks=(co_max_marks.iloc[0])
	max_marks=[]

	# co_marks=co_max_marks[0]
	for m_marks in co_marks:
	    max_marks.append(m_marks)
	print(max_marks)

	#add column names to the dataframe
	series1.columns=['roll_no','university_roll_no','name','co1','co2','co3']

	#add new column total_marks
	series1['total_marks']=series1['co1']+series1['co2']+series1['co3']

	#sort the dataframe based on total_marks in descending order
	series1 = series1.sort_values('total_marks',ascending=False)

	#drop rows having missing values
	series1.dropna(subset=['roll_no','name'], inplace=True)

	#recreate and intialie the index to new ones
	series1.index=[x for x in range(1,len(series1.index)+1)]

	#Analysis about a particular student
	university_roll_no = unino #get from app
	series = series1['university_roll_no'] #create a new dataseries
	df=series1[series==university_roll_no] # create a new dataframe


	# print(series1.info())
	# print(series1.describe())
	# print(series1)

	analy=""
	max_mark = series1.loc[series1.index[0],'total_marks']

	analy=analy+('You secured ' + str(int(df['total_marks'])) + '/40 and your rank is ' + str(df.index[0]) + ' in your class.' )+'\n'

	analy=analy+('The maximum mark scored in your class is ' + str(max_mark))+'\n'

	analy=analy+('The question paper contained the following course outcomes: ' + str([str.upper(series1.columns[co]) for co in range(3,len(series1.columns)-1)]))+'\n'

	co1_mark=int(df.loc[df.index[0],'co1'])
	co2_mark=int(df.loc[df.index[0],'co2'])
	co3_mark=int(df.loc[df.index[0],'co3'])
	co1_percentage = int((co1_mark/max_marks[0])*100)
	co2_percentage = int((co2_mark/max_marks[1])*100)
	co3_percentage = int((co3_mark/max_marks[2])*100)

	co_percentage = [co1_percentage, co2_percentage, co3_percentage]
	# print(co1_percentage,co2_percentage,co3_percentage)

	for index,co_percent in enumerate(co_percentage):
	    if(co_percent<=45):
		analy=analy+('You scored '+ str(co_percent) + '% from CO' + str(index+1) + ' which is less than the average performance. So, Please refer the following topics : blah blah blah to improve your score')+'\n'
	    elif(co_percent>=75):
		analy=analy+('You scored '+ str(co_percent) + '% from CO' + str(index+1) + '. Awesome, Keep up the good work and you will reach greater heights. With great knowledge comes great responsibility.')+'\n'
	    else:
		analy=analy+('You scored '+ str(co_percent) + '% from CO' + str(index+1) + ', you did good to get an overview about the topic but you need to improve a lot.')+'\n'


	#print(analy)
	return jsonify({'analy':analy})

api.add_resource(TestPath, '/test') # Route_1
api.add_resource(PredictType, '/predict/<int:c1>/<int:c2>/<int:c3>/<int:c4>/<int:c5>/')
api.add_resource(Analysis, '/analysis/<unino>')


if __name__ == '__main__':
   app.run(port=5002)
