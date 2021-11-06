from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.snowdb

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/recommend')
def recommend():
   return render_template('recommend.html')

@app.route('/track-info')
def trackinfo():
   return render_template('trackinfo.html')

@app.route('/major-track')
def majortrack():
   return render_template('majortrack.html')

@app.route('/track-info/1')
def trackinfo1():
   return render_template('1.html')

@app.route('/track-info/2')
def trackinfo2():
   return render_template('2.html')

@app.route('/track-info/3')
def trackinfo3():
   return render_template('3.html')

@app.route('/track-info/4')
def trackinfo4():
   return render_template('4.html')

@app.route('/review', methods=['GET'])
def read_reviews():
    reviews=list(db.track.find({},{'_id':False}))
    return jsonify({'all_reviews': reviews})

if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)
   
