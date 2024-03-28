from flask import request, session
from flask_restful import Resource
from config import app, db, api
from models.models import Booking, User, Service
from sqlalchemy.exc import IntegrityError


class Bookings(Resource):
  def get(self):
    bookings = Booking.query.all()
    for booking in bookings:
      print('booking', booking.to_dict())
    return [booking.to_dict() for booking in bookings], 200
  
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