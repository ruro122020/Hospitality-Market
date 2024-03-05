
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
from config import db, bcrypt


class User(db.Model, SerializerMixin):
  __tablename__ = 'users'

  __table_args__ = (db.CheckConstraint('length(name) > 3'),)

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  username = db.Column(db.String, nullable=False, unique=True)
  image_url = db.Column(db.String)
  _password_hash = db.Column(db.String, nullable=False)

  @validates('name')
  def validate_name(self, key, name):
    if type(name) == str and len(name) > 3:
      return name
    else:
      raise TypeError('Name must be of type string and more than 3 characters')

  @hybrid_property
  def password_hash(self):
    raise AttributeError('Password cannot be shown')
  
  @password_hash.setter
  def password_hash(self, password):
    password_hash = bcrypt.generate_password_hash(
      password.encode('utf-8'))
    
    self._password_hash = password_hash.decode('utf-8')

  def authenticate(self, password):
    return bcrypt.check_password_hash(
      self._password_hash, password.encode('utf-8'))
  

user = User(
  name='res3',
  username='ford',
  image_url=''
)

user.password_hash = 'pass'

print(user.name)
print(user.username)
# print(user._password_hash)
