from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.snowdb

db.track.insert_one({'track_name': '데이터사이언스', 'keyword': ["데이터사이언스","빅데이터","인공지능"],'major':'소프트웨어융합전공'})
db.track.insert_one({'track_name': '미디어인터페이스', 'keyword': ["미디어","인터페이스","영상처리"],'major':'소프트웨어융합전공'})

db.track.insert_one({'track_name': '인공지능', 'keyword': ["인공지능","영상처리","알고리즘"],'major':'컴퓨터과학전공'})
db.track.insert_one({'track_name': '클라우드', 'keyword': ["클라우드","웹시스템","네트워크"],'major':'컴퓨터과학전공'})
db.track.insert_one({'track_name': '전문개발자양성', 'keyword': ["개발자","고급프로그래밍","테크닉"],'major':'컴퓨터과학전공'})

db.track.insert_one({'track_name': '스마트IOT솔루션', 'keyword': ["SW개발","프로그래밍언어","SW이론","스마트IoT"],'major':'IT공학전공'})
db.track.insert_one({'track_name': '빅데이터분석', 'keyword': ["소프트웨어개발", "프로그래밍언어", "소프트웨어이론", "데이터분석", "데이터마이닝"],'major':'IT공학전공'})
db.track.insert_one({'track_name': 'AI감성컴퓨팅', 'keyword': ["인공지능", "감성정보", "기계학습", "컴퓨터비전"],'major':'IT공학전공'})
db.track.insert_one({'track_name': '커넥티드/IOT', 'keyword': ["커넥티드", "IoT", "ICT", "사물인터넷", "초연결사회"],'major':'IT공학전공'})
db.track.insert_one({'track_name': '인공지능/자율주행', 'keyword': ["인공지능", "자율주행", "스마트모빌리티", "머신러닝", "AI"],'major':'IT공학전공'})
db.track.insert_one({'track_name': '스마트센서/진단', 'keyword': ["스마트센서", "진단", "센싱", "헬스케어", "생체전자"],'major':'IT공학전공'})
db.track.insert_one({'track_name': '그린에너지/소재', 'keyword': ["그린에너지", "친환경 신소재", "환경공학", "태양전지"],'major':'IT공학전공'})

db.track.insert_one({'track_name': '글로벌경영', 'keyword': ["글로벌경영", "다국적기업", "국제마케팅전략", "글로벌스타트업"],'major':'경영학부'})
db.track.insert_one({'track_name': '마케팅전략', 'keyword': ["마케팅관리", "서비스마케팅", "광고판촉", "브랜드마케팅"],'major':'경영학부'})
db.track.insert_one({'track_name': '과학적경영', 'keyword': ["경영정보", "시스템분석", "시뮬레이션", "네트워크"],'major':'경영학부'})
db.track.insert_one({'track_name': '인사조직', 'keyword': ["직무분석", "조직설계", "조직문화", "리더십론", "변화관리"],'major':'경영학부'})
db.track.insert_one({'track_name': '통합재무분석', 'keyword': ["금융기관경영", "파생금융상품", "위험관리", "헤지포트폴리오", "가치평가"],'major':'경영학부'})
db.track.insert_one({'track_name': '회계정보분석및관리', 'keyword': ["기업회계기준", "재무제표", "원가통제", "활동성원가", "결합원가"],'major':'경영학부'})
db.track.insert_one({'track_name': '경영분석', 'keyword': ["디지털마케팅", "데이터분석론", "데이터분석활용"],'major':'경영학부'})
