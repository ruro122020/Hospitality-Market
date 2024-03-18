from flask import request, session, jsonify
from flask_restful import Resource
from config import app, db, api, ma
from models.models import Service, User
from sqlalchemy.exc import IntegrityError
from flask_marshmallow.fields import fields

class UserSchema(ma.Schema):
  class Meta:
    model = User
    load_instance = True

  id = ma.Integer()
  name = ma.String()
  username = ma.String()
  email = ma.String()
  image_url = ma.String()
  

class ServiceSchema(ma.Schema):
  class Meta:
    model = Service
    load_instance = True
  
  title = ma.String()
  description = ma.String()
  price = ma.String()
  location = ma.String()
  category = ma.String()
  user = fields.Nested(UserSchema)


  url = ma.Hyperlinks(
    {
        # "self": ma.URLFor("services", values=dict(id="<id>")),
        "collection": ma.URLFor("services"),
    }
)
  

services_schema = ServiceSchema(many=True)

class Services(Resource):
  
  def get(self):
    services = Service.query.all()
    results = services_schema.dump(services)
    return results, 200
  
  def post(self):
    json = request.get_json()
    if session.get('user_id'):
      service = Service(
        title=json.get('title'),
        description = json.get('description'),
        price = json.get('price'),
        location = json.get('location'),
        category = json.get('category'),
        user_id=session.get('user_id')
      )
    else:
      raise ValueError('User has no session')
    try:
      db.session.add(service)
      db.session.commit()
      return service.to_dict(), 201
    except IntegrityError:
      return {'error': 'Unproccessable Entity'}, 422


class ServiceByID(Resource):

  pass

api.add_resource(Services, '/services', endpoint='services')
api.add_resource(Services, '/services/<int:id>', endpoint='service')