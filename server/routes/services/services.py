from flask import request, session
from flask_restful import Resource
from config import db, api
from models.models import Service
from sqlalchemy.exc import IntegrityError
from schemas.service import service_schema, services_schema

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
      return service_schema.dump(service), 201
    except IntegrityError:
      return {'error': 'Unproccessable Entity'}, 422


api.add_resource(Services, '/services', endpoint='services')
