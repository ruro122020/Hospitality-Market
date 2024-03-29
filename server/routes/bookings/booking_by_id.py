from flask import request
from flask_restful import Resource
from config import app, db, api
from models.models import Booking
from sqlalchemy.exc import IntegrityError

class BookingById(Resource):
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