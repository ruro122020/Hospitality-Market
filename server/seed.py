#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models.models import User
from config import db

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        print('Deleting all records...')
        User.query.delete()

        print('Creating users...')

        users = []

        for i in range(20):

          user = User(
             name=fake.name(),
             username=fake.first_name(),
             image_url=fake.url())
          
          user.password_hash = user.username + 'password'

          users.append(user)
        
        db.session.add_all(users)
        db.session.commit()

        print('Complete.')
