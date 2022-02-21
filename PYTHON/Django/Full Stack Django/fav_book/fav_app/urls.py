from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
    path('register',views.register),
    path('login',views.login),
    path('books',views.book),
    path('clear',views.clear),
    path('books/add_book',views.add_book),
    path('books/add_fav/<int:book_id>',views.add_fav),
    path('books/<int:book_id>/remove',views.remove_fav),
    path('books/<int:book_id>',views.add_details),
    path('books/<int:book_id>/update',views.add_update),
]