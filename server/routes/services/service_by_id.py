from flask import request, session
from flask_restful import Resource
from config import app, db, api, ma
from models.models import Service, User
from sqlalchemy.exc import IntegrityError
from flask_marshmallow.fields import fields
from schemas.service import service_schema

class ServiceByID(Resource):
  
  def patch(self, id):
    service = Service.query.filter_by(id=id).first()
    json = request.get_json()
    print('json', json)
    # if service:
    #   for attr in json:
    #     if attr != 'bookings':
    #       setattr(service, attr, json.get(attr))
    try:
      for attr in json:
        setattr(service, attr, json[attr])
      db.session.add(service)
      db.session.commit()
      return service_schema.dump(service), 200
    except IntegrityError:
      return {"error": "Service could not be updated"}, 422
    

  def delete(self, id):
    service = Service.query.filter_by(id=id).first()
    try:
      db.session.delete(service)
      db.session.commit()
      return {}, 200
    except IntegrityError:
      return {'error': 'Service could not be deleted'}, 404

api.add_resource(ServiceByID, '/services/<int:id>', endpoint='service_id')




{
 'title': 'clean',
 'description': 'clean ', 
 'price': '45.00', 
 'location': 'new heights', 
 'category': 'House Cleaning', 
 'bookings': [], 
 'user_id': 16, 
 'id': 16,
 }