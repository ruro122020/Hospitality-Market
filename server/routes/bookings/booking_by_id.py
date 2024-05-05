from flask import request
from flask_restful import Resource
from config import app, db, api
from models.models import Booking
from sqlalchemy.exc import IntegrityError
from schemas.booking import booking_schema, bookings_schema

class BookingById(Resource):
  def patch(self, id):
    booking = Booking.query.filter_by(id=id).first()
    if booking:
      json = request.get_json()
      for attr in json:
        setattr(booking, attr, json.get(attr))
    try:
      db.session.add(booking)
      db.session.commit()
      return booking_schema.dump(booking), 200
    except IntegrityError:
      return {"error": "Booking could not be updated"}
    
  def delete(self, id):
    booking = Booking.query.filter_by(id=id).first()
    if booking:
      try:
        db.session.delete(booking)
        db.session.commit()
        return {}, 200
      except IntegrityError:
        return {'error': 'Booking could not be deleted'}, 400


api.add_resource(BookingById, '/bookings/<int:id>', endpoint='booking_id')