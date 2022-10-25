#!/bin/bash

cd /usr/src/app/goingMerry
export PYTHONPATH=/usr/src/app/goingMerry/:$PYTHONPATH

python manage.py makemigrations
python manage.py migrate
echo "Starting Django Server"	

if [ "$DJANGO_SUPERUSER_USERNAME" ]
then
    python manage.py createsuperuser \
        --noinput \
        --username $DJANGO_SUPERUSER_USERNAME \
        --email $DJANGO_SUPERUSER_EMAIL
    echo 'superuser created' 
fi

$@

python manage.py runserver 0.0.0.0:7000