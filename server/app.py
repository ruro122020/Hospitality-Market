#!/usr/bin/env python3
import os
# Local imports
from config import app
# Add your model imports
from routes.routes import *
from models.models import *
from dotenv import load_dotenv

#session key configuration
load_dotenv()
app.secret_key= os.getenv('SECRET_KEY')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

