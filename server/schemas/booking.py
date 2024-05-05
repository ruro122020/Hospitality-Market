from config import ma
from models.models import Booking

class BookingSchema(ma.Schema):
  class Meta:
    model = Booking
    load_instance = True
  
  id = ma.Number()
  date = ma.String()
  time = ma.String()
  status = ma.String()
  


booking_schema = BookingSchema()
bookings_schema = BookingSchema(many=True)