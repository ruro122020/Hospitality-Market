from flask import request, session
from flask_restful import Resource
from config import app, db, api
from models.models import Service


class Services(Resource):
  
  def get(self):
    services = Service.query.all()
    services_dict = [service.to_dict() for service in services]
    return services_dict, 200
  


api.add_resource(Services, '/services', endpoint='services')