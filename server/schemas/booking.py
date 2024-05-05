from config import ma
from models.models import Booking
from flask_marshmallow.fields import fields

class BookingSchema(ma.Schema):
  class Meta:
    model = Booking
    load_instance = True
  
  id = ma.Number()
  date = ma.Date()
  time = ma.Time()
  status = ma.String()


booking_schema = BookingSchema()
bookings_schema = BookingSchema(many=True)