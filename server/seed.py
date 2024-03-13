#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
import random
# Remote library imports
from faker import Faker

# Local imports
from app import app
from models.models import User, Service
from config import db

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        print('Deleting all records...')
        User.query.delete()
        Service.query.delete()
        print('Creating users...')

        users = []
        usernames = []
        for i in range(15):
          username = fake.first_name()
          email = f'{fake.last_name()}@{fake.domain_name()}'
          #this while is to check if a username already exist
          while username in usernames:
             username = fake.first_name()
          usernames.append(username)
          
          user = User(
             name=fake.name(),
             username=username,
             email=email,
             image_url=fake.url())
          
          user.password_hash = user.username + 'password'

          users.append(user)
        
        db.session.add_all(users)
        db.session.commit()

        print('Creating Services...')

        services = []
        category=['Pet', 'Cleaning', 'Landscaping']
        prices=[12.33, 10.00, 19.00, 40.00, 50.53]
        for user in users:
          service = Service(
            title=fake.company(),
            description=fake.sentence(),
            price=random.choice(prices),
            location=fake.address(),
            category=random.choice(category),
            user=random.choice(users)
          )
          services.append(service)

        db.session.add_all(services)
        db.session.commit()

        print('Complete.')
      
