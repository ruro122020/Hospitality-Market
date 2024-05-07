from flask import request
from flask_restful import Resource
from config import app, db, api
from models.models import Booking
from sqlalchemy.exc import IntegrityError
from schemas.booking import booking_schema

"""
{
  "date": "May 8, 2024",
  "id": 15,
  "status": "Pending",
  "provider": {
      "id": 2,
      "_password_hash": "$2b$12$0kDa0XFN.Kt5ZQIk4eCPh.PDA92HgvlLB.TLJ1Fxzozf5brtOAQaK",
      "services": [
          {
              "category": "Pet",
              "id": 1,
              "price": "40.00",
              "location": "Idaho",
              "description": "Operation beyond official lawyer chance go individual song. Young ask throw report any. Environmental should different lawyer information notice standard.",
              "bookings": [
                  {
                      "date": "2003-12-31",
                      "id": 9,
                      "status": "Pending",
                      "provider_id": 14,
                      "service_id": 1,
                      "consumer_id": 9,
                      "time": "22:11:24"
                  },
                  {
                      "date": "May 6, 2024",
                      "id": 14,
                      "status": "Pending",
                      "provider_id": 2,
                      "service_id": 1,
                      "consumer_id": 17,
                      "time": "06:00 AM"
                  },
                  {
                      "date": "May 8, 2024",
                      "id": 15,
                      "status": "Pending",
                      "provider_id": 2,
                      "service_id": 1,
                      "consumer_id": 17,
                      "time": "06:00 AM"
                  }
              ],
              "title": "Lawrence, Wang and Carter",
              "user_id": 2
          },
          {
              "category": "Landscaping",
              "id": 15,
              "price": "50.53",
              "location": "Oklahoma",
              "description": "Fact think middle capital. Because spring difference management support buy. Yeah seek level opportunity hold teach someone. Participant per clear heart too president.",
              "bookings": [
                  {
                      "date": "1995-06-17",
                      "id": 7,
                      "status": "Pending",
                      "provider_id": 6,
                      "service_id": 15,
                      "consumer_id": 4,
                      "time": "00:27:23"
                  }
              ],
              "title": "Craig, Ruiz and Joseph",
              "user_id": 2
          }
      ],
      "image_url": "http://smith-buchanan.com/",
      "username": "Ronald",
      "email": "Love@garcia.com",
      "name": "Kathryn Bowen"
  },
  "time": "06:00 AM",
  "consumer": {
      "id": 17,
      "_password_hash": "$2b$12$RHuIcg4TEJHaQgZGOX8qP.Nig.kdmGZF6x1riU6olSgagDU3dIWYO",
      "services": [],
      "image_url": null,
      "username": "janedoe",
      "email": "janedoe@gmail.com",
      "name": "Jane Doe"
  },
  "service": {
      "category": "Pet",
      "id": 1,
      "price": "40.00",
      "location": "Idaho",
      "description": "Operation beyond official lawyer chance go individual song. Young ask throw report any. Environmental should different lawyer information notice standard.",
      "title": "Lawrence, Wang and Carter",
      "user_id": 2
  }
}
"""
class Bookings(Resource):
  # def get(self):
  #   return [booking.to_dict() for booking in Booking.query.all()], 200
  
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
      return booking_schema.dump(booking)
    except IntegrityError:
      return {'error': 'Unproccessable Entity'}, 422

api.add_resource(Bookings, '/bookings', endpoint='bookings')