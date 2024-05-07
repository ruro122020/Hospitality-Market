from config import ma
from models.models import User
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
  consumer_bookings = ma.Nested("BookingSchema")
  provider_bookings = ma.Nested("BookingSchema")