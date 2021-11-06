from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.snowdb

db.track.insert_one({'track_name': '데이터사이언스', 'keyword': ["데이터사이언스","빅데이터","인공지능"]})

