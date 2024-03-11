from flask import request, session
from flask_restful import Resource
from config import app, db, api
from models.models import User

class CheckSession(Resource):
  def get(self):
    if session.get('user_id'):
      user = User.query.filter(User.id == session.get('user_id')).first()
      return user.to_dict(rules=('-_password_hash',)), 200
    return {}, 401

api.add_resource(CheckSession, '/check_session', endpoint='check_session')