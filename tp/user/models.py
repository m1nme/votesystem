from django.db import models

# Create your models here.


class Student(models.Model):

    sno = models.CharField(max_length=200)

    # session_key
    password = models.CharField(max_length=200)

    #
    name = models.CharField(max_length=200)