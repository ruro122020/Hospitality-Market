#!/usr/bin/env python3

# Local imports
from config import app
# Add your model imports
from routes.routes import *
from models.models import *
from dotenv import load_dotenv

#session key configuration
app.secret_key=b'\xf5\xf6 \x8a\xda\x02|\xad\xe1\xeb\x91\xc3\xf5\xa3\xb7V'

if __name__ == '__main__':
    app.run(port=5555, debug=True)

