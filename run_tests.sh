#!/bin/bash

# Run tests for GEE-Platform

echo "Starting test suite..."

# Activate the virtual environment
source /path/to/venv/bin/activate

# Run the Django test command
python /path/to/gee_platform/manage.py test --noinput

echo "Test suite complete."
