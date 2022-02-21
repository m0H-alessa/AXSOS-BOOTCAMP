from django.urls import path     
from . import views

urlpatterns = [
    path('wall', views.wall),
    path('wall', views.post),
    path('wall', views.comment),
]