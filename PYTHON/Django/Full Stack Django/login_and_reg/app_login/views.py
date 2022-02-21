from email.message import Message
from mailbox import MaildirMessage
from multiprocessing import context
import bcrypt
from django.shortcuts import render,redirect
from .models import User
from django.contrib import messages

def index(request):
    if 'first_name' in request.session:
        return redirect("/success")
    return render(request, 'index.html')

def register(request):
    errors = User.objects.register_validator(request.POST)
    request.session['coming']= 'REGISTER'
    user_exists = User.objects.filter(email=request.POST['email'])  
    if(user_exists[0].email):
        messages.error(request, "This email is already registered in the database!")
        return redirect('/')
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        password = request.POST['password']
        pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()    
        user = User.objects.create(first_name=request.POST['first_name'],
                                    last_name=request.POST['last_name'],
                                    email=request.POST['email'],
                                    password=pw_hash)
        messages.success(request, "User successfully REGISTERED")
        if 'first_name' not in request.session:
            request.session['first_name']=request.POST['first_name']
    return redirect('/success')

def login(request):
    errors = User.objects.login_validator(request.POST)
    request.session['coming']= 'LOGIN'
    user = User.objects.filter(email=request.POST['email']) 
    if (len(user)>0): 
        logged_user = User.objects.get(email=request.POST['email'])  
        if bcrypt.checkpw(request.POST['password'].encode(), logged_user[0].password.encode()):
            messages.success(request, "User successfully LOGGED IN")
            if 'first_name' not in request.session:
                request.session['first_name']=user[0].first_name
            return redirect('/success')
    else:
        if len(errors)>0:
            for key, value in errors.items():
                messages.error(request, value)
    return redirect('/')

def result(request):
    if 'first_name' in request.session:
        context={
            "first_name":request.session['first_name']
        }
    return render(request, 'result.html',context)

def clear(request):
    if 'first_name' in request.session:
        del request.session['first_name']
    return redirect('/')

