from flask import request
from flask_restful import Resource
from config import app, db, api
from models.models import Booking
from sqlalchemy.exc import IntegrityError
from schemas.booking import booking_schema, bookings_schema

class Bookings(Resource):
  def get(self):
    return [booking.to_dict() for booking in Booking.query.all()], 200
  
  def post(self):
    json = request.get_json()

    booking = Booking(
      date = json.get('date'),
      time = json.get('time'),
      status = json.get('status'),
      provider_id = json.get('providerId'),
      consumer_id = json.get('consumerId'),
      service_id = json.get('serviceId')
    )

    try:
      db.session.add(booking)
      db.session.commit()
      return booking.to_dict(rules=('-provider_id', '-consumer_id', '-service_id')), 200
    except IntegrityError:
      return {'error': 'Unproccessable Entity'}, 422

api.add_resource(Bookings, '/bookings', endpoint='bookings')