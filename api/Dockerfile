FROM  python:3.8.13-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR /api

RUN pip install django djangorestframework django-cors-headers pendulum

# copy from the current directory of the Dockerfile to /api in the image
COPY . . 

RUN python manage.py migrate

EXPOSE 8000