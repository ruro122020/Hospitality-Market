from flask import request, session
from flask_restful import Resource
from config import app, db, api
from models.models import Booking, User, Service
from sqlalchemy.exc import IntegrityError

#####RECURSSION ERROR HAPPENING
###ERROR OCCURS WHEN TRYING TO ACCES USER.SERVICES
####FIX BEFORE CONNECTING TO FRONTEND
class Bookings(Resource):
  def post(self):
    json = request.get_json()

    booking = Booking(
      date = json.get('date'),
      time = json.get('time'),
      provider_id = json.get('provider'),
      consumer_id = json.get('consumer'),
      service_id = json.get('service')
    )

    try:
      db.session.add(booking)
      db.session.commit()

      return booking.to_dict(), 200
    except IntegrityError:
      return {'error': 'Unproccessable Entity'}, 422

api.add_resource(Bookings, '/bookings', endpoint='bookings')