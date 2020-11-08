from django.db import models

# Create your models here.

class vote_info(models.Model):

    votename = models.CharField(max_length=200)

    votecontent = models.CharField(max_length=2000)

    voteintro = models.CharField(max_length=200)

    votetype = models.CharField(max_length=20)

class vote_result(models.Model):

    voteid = models.CharField(max_length=200)

    sno = models.CharField(max_length=2000)

    sname = models.CharField(max_length=200)

    stno = models.CharField(max_length=200,default='0')

    tno = models.CharField(max_length=20)
