from distutils.command.upload import upload
from email.message import Message
from mailbox import MaildirMessage
from multiprocessing import context
import bcrypt
from django.shortcuts import render,redirect
from .models import User,Book
from django.contrib import messages

def index(request):
    if 'first_name' in request.session:
        return redirect("/books")
    return render(request, 'index.html')

def register(request):
    errors = User.objects.register_validator(request.POST)
    request.session['coming']= 'REGISTER'
    # user_exists = User.objects.filter(email=request.POST['email'])  
    # if len(user_exists[0].email)>0:
    #     messages.error(request, "This email is already registered in the database!")
        # return redirect('/')
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
            request.session['user_id']=user.id
    return redirect('/books')

def login(request):
    errors = User.objects.login_validator(request.POST)
    request.session['coming']= 'LOGIN'
    user = User.objects.filter(email=request.POST['email']) 
    if (len(user)>0): 
        logged_user = User.objects.get(email=request.POST['email'])  
        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            messages.success(request, "User successfully LOGGED IN")
            if 'first_name' not in request.session:
                request.session['first_name']=user[0].first_name
                request.session['user_id']=user[0].id
            return redirect('/books')
    else:
        if len(errors)>0:
            for key, value in errors.items():
                messages.error(request, value)
    return redirect('/')

def clear(request):
    if 'first_name' in request.session:
        del request.session['first_name']
    return redirect('/')

def book(request):
    if 'first_name' not in request.session:
        return redirect("/")
    user=User.objects.get(id=request.session['user_id'])
    context={
        'this_user': user,
        'this_book':Book.objects.all(),
        'favorites':user.liked_books.all(),
    }
    return render(request, 'books.html',context)


def add_book(request):
    book=Book.objects.create(title=request.POST['title'],
                        description=request.POST['desc'],
                        uploaded_by=User.objects.get(id=request.session['user_id']))
    logged_user=User.objects.get(id=request.session['user_id'])
    logged_user.liked_books.add(book)
    return redirect('/books')

def add_fav(request,book_id):
    logged_user=User.objects.get(id=request.session['user_id'])
    clicked_book=Book.objects.get(id=book_id)
    logged_user.liked_books.add(clicked_book)
    return redirect('/books')

def remove_fav(request,book_id):
    logged_user=User.objects.get(id=request.session['user_id'])
    clicked_book=Book.objects.get(id=book_id)
    logged_user.liked_books.remove(clicked_book)
    return redirect('/books/'+ str(book_id))

def add_details(request, book_id):
    user=User.objects.get(id=request.session['user_id'])
    context={
        'this_user': user,
        'this_book':Book.objects.get(id=book_id),
    }
    return render (request,'details.html',context)

def add_update(request, book_id):
    if request.POST['btn']=='update':
        updated_book=Book.objects.get(id=book_id)
        updated_book.description=request.POST['desc']
        updated_book.save()
        return redirect('/books/' + str(book_id))
    if request.POST['btn']=='delete':
        deleted_book=Book.objects.get(id=book_id)
        deleted_book.delete()
        return redirect('/books')



