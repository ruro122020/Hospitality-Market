from flask import request, session
from flask_restful import Resource
from config import app, db, api
from models.models import User
from sqlalchemy.exc import IntegrityError


class Login(Resource):
  def post(self):
    json = request.get_json()
    user = User.query.filter(User.username == json['username']).first()
    if user:
      if user.authenticate(json.get('password')):
        session['user_id'] = user.id
        return user.to_dict(), 200
      else:
        return {'error':'Invalid Username or Password'}, 401



api.add_resource(Login, '/login', endpoint='login')