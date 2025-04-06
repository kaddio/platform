# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y ffmpeg libsndfile1

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install openai-whisper flask

# Copy the current directory contents into the container
COPY . /app

# Expose the port the app will run on
EXPOSE 4000

# Define environment variable for Flask
ENV FLASK_APP=app.py

# Run the Flask app when the container launches
CMD ["flask", "run", "--host=0.0.0.0", "--port=4000"]
