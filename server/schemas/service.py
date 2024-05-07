from config import ma
from models.models import Service
from flask_marshmallow.fields import fields

class ServiceSchema(ma.Schema):

  class Meta:
    model = Service
    load_instance = True
  
  id = ma.Integer()
  title = ma.String()
  description = ma.String()
  price = ma.String()
  location = ma.String()
  category = ma.String()
  user = fields.Nested("UserSchema")
  #Note: Add the field that handles a single 
  #service
  # url = ma.Hyperlinks(
  #   {
  #       "collection": ma.URLFor("services")
  #   }
  # )
  
service_schema = ServiceSchema()
services_schema = ServiceSchema(many=True)


"""
{
  "user": {
      "consumer_bookings": [
          {
              "provider_id": 14,
              "time": "22:11:24",
              "date": "2003-12-31",
              "id": 9,
              "status": "Pending",
              "service": {
                  "title": "Pet Sitting",
                  "category": "Pet Care",
                  "user_id": 2,
                  "id": 1,
                  "location": "Cincinnati, OH",
                  "description": "I will babysit your dog",
                  "price": "10.00"
              },
              "service_id": 1,
              "consumer_id": 9
          },
          {
              "provider_id": 9,
              "time": "23:20:47",
              "date": "1986-06-28",
              "id": 10,
              "status": "Pending",
              "service": {
                  "title": "Webb-Richards",
                  "category": "Landscaping",
                  "user_id": 7,
                  "id": 9,
                  "location": "Missouri",
                  "description": "Throughout concern right attention. Attorney treat base how.",
                  "price": "40.00"
              },
              "service_id": 9,
              "consumer_id": 9
          }
      ],
      "name": "James Johnson",
      "email": "Murray@adams.info",
      "_password_hash": "$2b$12$4oN6edfAazqgEHkDtIoic.2zUdIG5pn6F/96lbDIyeTj8LixDtlsa",
      "provider_bookings": [
          {
              "provider_id": 9,
              "time": "23:20:47",
              "date": "1986-06-28",
              "id": 10,
              "status": "Pending",
              "service": {
                  "title": "Webb-Richards",
                  "category": "Landscaping",
                  "user_id": 7,
                  "id": 9,
                  "location": "Missouri",
                  "description": "Throughout concern right attention. Attorney treat base how.",
                  "price": "40.00"
              },
              "service_id": 9,
              "consumer_id": 9
          },
          {
              "provider_id": 9,
              "time": "06:00 AM",
              "date": "May 6, 2024",
              "id": 12,
              "status": "Pending",
              "service": {
                  "title": "Olsen, Johnson and Martin",
                  "category": "Pet",
                  "user_id": 9,
                  "id": 13,
                  "location": "Iowa",
                  "description": "Early security meeting morning friend task. Hundred if beyond.",
                  "price": "10.00"
              },
              "service_id": 13,
              "consumer_id": 16
          }
      ],
      "id": 9,
      "username": "Angela",
      "image_url": "http://hill.org/"
  },
  "title": "Pet Sitting",
  "category": "Pet Care",
  "user_id": 9,
  "id": 5,
  "location": "Cincinnati, OH",
  "description": "I will babysit your dog",
  "bookings": [
      {
          "provider_id": 6,
          "time": "19:50:43",
          "date": "1999-01-24",
          "id": 8,
          "status": "Pending",
          "service_id": 5,
          "consumer_id": 5
      }
  ],
  "price": "10.00"
}
"""