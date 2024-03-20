from flask import request, session
from flask_restful import Resource
from config import app, db, api, ma
from models.models import Service, User
from sqlalchemy.exc import IntegrityError
from flask_marshmallow.fields import fields


class ServiceByID(Resource):
  def delete(self, id):
    service = Service.query.filter_by(id=id).first()
    try:
      db.session.delete(service)
      db.session.commit()
      return {}, 200
    except IntegrityError:
      return {'error': 'Service could not be deleted'}


api.add_resource(ServiceByID, '/services/<int:id>', endpoint='service_id')