from django.urls import path     
from . import views
urlpatterns = [
    path('show/', views.show),	   
    path('new/', views.new),
    path('add', views.add),
    path('read/<int:read_id>', views.read , name='read'),
    path('show/<int:edit_id>/edit', views.update , name='update'),
    path('print/<int:edit_id>/edit',views.edit ),
    path('delet/<int:delet_id>/edit',views.delet )
]