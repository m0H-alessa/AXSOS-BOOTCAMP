from email import message
from django.shortcuts import render,redirect
from .models import Users,Messages,Comments

def wall(request):
    # context = {
    #     'the_user' : Users.objects.all()
    # }
    return render(request,'wall.html')

def post(request):
    Messages.objects.create(message=request.POST['post_message'],user=Users.objects.get(id=request.POST['user']) )
    return redirect('/wall')

def comment(request):
    return redirect('/wall')