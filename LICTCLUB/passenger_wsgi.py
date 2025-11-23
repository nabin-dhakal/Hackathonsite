import os
import sys

# Adjust these paths to point to your Django project directory
PROJECT_PATH = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, PROJECT_PATH)

# Replace 'myproject' with your actual Django project name
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Lictclub.settings')

# Import the WSGI application from Django's wsgi.py
from Lictclub.wsgi import application
