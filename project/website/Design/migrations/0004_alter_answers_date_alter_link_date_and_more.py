# Generated by Django 4.0.4 on 2022-05-29 19:18

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Design', '0003_alter_answers_date_alter_link_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answers',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 5, 30, 0, 48, 57, 232956)),
        ),
        migrations.AlterField(
            model_name='link',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 5, 30, 0, 48, 57, 226580)),
        ),
        migrations.AlterField(
            model_name='message',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 5, 30, 0, 48, 57, 234608)),
        ),
        migrations.AlterField(
            model_name='notice',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 5, 30, 0, 48, 57, 234608)),
        ),
        migrations.AlterField(
            model_name='query',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 5, 30, 0, 48, 57, 234608)),
        ),
        migrations.AlterField(
            model_name='questions',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 5, 30, 0, 48, 57, 226580)),
        ),
        migrations.AlterField(
            model_name='register',
            name='date',
            field=models.DateField(default=datetime.datetime(2022, 5, 30, 0, 48, 57, 222264)),
        ),
    ]
