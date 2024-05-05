from config import ma
from models.models import User


class UserSchema(ma.Schema):
  class Meta:
    model = User
    load_instance = True

  id = ma.Integer()
  name = ma.String()
  username = ma.String()
  email = ma.String()
  image_url = ma.String()
 