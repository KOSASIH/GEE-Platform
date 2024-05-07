#!/bin/bash

# Initialize the database for GEE-Platform

echo "Starting database initialization..."

# Activate the virtual environment
source /path/to/venv/bin/activate

# Run the Django migrate command
python /path/to/gee_platform/manage.py migrate --noinput

echo "Database initialization complete."
