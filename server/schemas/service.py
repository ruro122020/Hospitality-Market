from config import ma
from models.models import User, Service
from flask_marshmallow.fields import fields
from .user import UserSchema

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
  id = ma.Number()
  #Note: Add the field that handles a single 
  #service
  # url = ma.Hyperlinks(
  #   {
  #       "collection": ma.URLFor("services")
  #   }
  # )
  
service_schema = ServiceSchema()
services_schema = ServiceSchema(many=True)
