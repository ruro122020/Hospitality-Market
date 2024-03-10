from sqlalchemy_serializer import SerializerMixin
from config import db


class Service(db.Model, SerializerMixin):
  __tablename__ = 'services'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String, nullable=False)
  description = db.Column(db.String, nullable=False)
  price = db.Column(db.Float, nullable=False),
  location = db.Column(db.String, nullable=False)
  category = db.Column(db.String, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  #relationship
  


