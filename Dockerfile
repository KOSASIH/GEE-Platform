# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install the dependencies from the requirements file
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code to the working directory
COPY . .

# Set the environment variables
ENV DJANGO_SETTINGS_MODULE=gee_platform.settings
ENV SECRET_KEY=your-secret-key
ENV DEBUG=False

# Expose the port that the application will run on
EXPOSE 8000

# Start the application using Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "gee_platform.wsgi"]
