from distutils.command.upload import upload
from tkinter import CASCADE
from turtle import title
from django.db import models
import re

class UserManager(models.Manager):
    def register_validator(self, postData):
        errors = {}
        if len(postData['first_name']) < 2:
            errors["first_name"] = "first name should be at least 2 characters"
        if len(postData['last_name']) < 2:
            errors["last_name"] = "last name should be at least 2 characters"
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):           
            errors['email'] = "Invalid email address!"
        if (postData['password']) != (postData['con_pass']):
            errors["matching_password"] = "password mismatch"
        if len(postData['password']) < 8:
            errors["password"] = "Password description should be at least 8 characters"
        if len(postData['con_pass']) < 8:
            errors["con_pass"] = "Confrimed Password name should be at least 8 characters"
        return errors

    def login_validator(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']):           
            errors['email'] = "Invalid email address!"
        if len(postData['password']) < 8:
            errors["password"] = "Password description should be at least 8 characters"
        return errors


class BookManager(models.Manager):
    def book_validator(self, postData):
        errors = {}
        if len(postData['title']) == 0:
            errors['title'] = "Title is required"
        if len(postData['description']) < 5:
            errors['description'] = "Description should be at least 5 characters"
        return errors

    def update_validator(self, postData):
        errors = {}

        if len(postData['description']) < 5:
            errors ['update_description'] = "Description should be at least 5 characters"
        return errors


class User(models.Model):
    first_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)
    email = models.CharField(max_length=55)
    password = models.CharField(max_length=55)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Book(models.Model):
    title = models.CharField(max_length=55)
    description = models.TextField()
    uploaded_by = models.ForeignKey(User, related_name="books_uploaded", on_delete=CASCADE)
    users_who_like = models.ManyToManyField(User, related_name="liked_books")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()



