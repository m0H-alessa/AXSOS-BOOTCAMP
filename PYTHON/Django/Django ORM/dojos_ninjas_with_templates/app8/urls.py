from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
    path('handel', views.handel),
    path('handel1', views.handel1),   
]