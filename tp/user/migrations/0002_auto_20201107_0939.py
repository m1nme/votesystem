# Generated by Django 3.0.6 on 2020-11-07 01:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='Sno',
            new_name='sno',
        ),
    ]
