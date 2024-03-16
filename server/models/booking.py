from config import db
from sqlalchemy_serializer import SerializerMixin

class Booking(db.Model, SerializerMixin):
  __tablename__ = 'bookings'

  id = db.Column(db.Integer, primary_key=True)
  date = db.Column(db.String, nullable=False)
  time = db.Column(db.String, nullable=False)
  provider_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  consumer_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  service_id = db.Column(db.Integer, db.ForeignKey('services.id'))
  
  #relationships
