from config import db
from sqlalchemy_serializer import SerializerMixin

class Booking(db.Model, SerializerMixin):
  __tablename__ = 'bookings'

  serialize_rules = ('-provider.provider_bookings',
                     '-provider.consumer_bookings',
                     '-consumer.provider_bookings',
                     '-consumer.consumer_bookings',
                     '-service.bookings',
                     '-service.user')

  id = db.Column(db.Integer, primary_key=True)
  date = db.Column(db.String, nullable=False)
  time = db.Column(db.String, nullable=False)
  status = db.Column(db.String, nullable=False)
  provider_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  consumer_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  service_id = db.Column(db.Integer, db.ForeignKey('services.id'))
  
  #relationships
  provider = db.relationship('User', foreign_keys=[provider_id] ,back_populates='provider_bookings')
  consumer = db.relationship('User', foreign_keys=[consumer_id], back_populates='consumer_bookings')

  service = db.relationship('Service', back_populates='bookings')