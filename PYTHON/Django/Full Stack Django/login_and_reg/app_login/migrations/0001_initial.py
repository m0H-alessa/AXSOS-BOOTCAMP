# Generated by Django 2.2.4 on 2022-02-16 09:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='login',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=55)),
                ('last_name', models.CharField(max_length=55)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=55)),
                ('confirm_PW', models.CharField(max_length=55)),
            ],
        ),
    ]
