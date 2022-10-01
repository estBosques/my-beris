FROM python:3

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /src/app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

# RUN django-admin startproject backend_project