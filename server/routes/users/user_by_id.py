from flask import request, session
from flask_restful import Resource
from config import app, db, api, ma
from models.models import User, Service
from sqlalchemy.exc import IntegrityError
from flask_marshmallow.fields import fields


@app.before_request
def check_if_logged_in():
  
  if not session.get('user_id') and request.endpoint == 'users_id':
    return {'error': 'Unauthorized'}, 401
  

class ServicesSchema(ma.Schema):
  class Meta:
    model = Service
    load_instance=True

  title = ma.String()
  description = ma.String()
  price = ma.String()
  location = ma.String()
  category = ma.String()
  
class UserSchema(ma.Schema):
  class Meta:
    model = User
    load_instance = True

  id = ma.Integer()
  name = ma.String()
  username = ma.String()
  email = ma.String()
  image_url = ma.String()
  services = fields.Nested(ServicesSchema, many=True)

  url = ma.Hyperlinks(
    {
      "self": ma.URLFor("user_detail", values=dict(id="<id>"))
    }
  )


user_schema = UserSchema()
  
class UsersByID(Resource):
  
  def get(self, id):
    user = User.query.filter_by(id=id).first()
    if user:
      return user_schema.dump(user), 200
    else:
      return {'error': 'User not logged in'}, 400


api.add_resource(UsersByID, '/users/<int:id>', endpoint='user_detail')