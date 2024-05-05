from config import ma
from models.models import Booking
from flask_marshmallow.fields import fields
from .user import UserSchema
from .service import ServiceSchema

class BookingSchema(ma.Schema):
  class Meta:
    model = Booking
    load_instance = True
  
  id = ma.Number()
  date = ma.String()
  time = ma.String()
  status = ma.String()
  provider = fields.Nested(UserSchema)
  consumer = fields.Nested(UserSchema)
  service = fields.Nested(ServiceSchema)

booking_schema = BookingSchema()
bookings_schema = BookingSchema(many=True)