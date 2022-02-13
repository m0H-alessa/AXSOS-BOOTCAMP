from http.client import HTTPResponse
from multiprocessing import context
from django.shortcuts import render,HttpResponse,redirect
from .models import Book,Author

def add_app(request):
    context = {
        'book': Book.objects.all
    }
    return render(request , "add_book.html" ,context)

def form_add(request):
    Book.objects.create(title = request.POST['title'],desc = request.POST['description'] )
    return redirect("/add_book")

def view(request,book_id):
    print('***')
    book1 = Book.objects.get(id=book_id)
    this_book = Book.objects.get(id=book_id)
    context = {
        'book':Book.objects.get(id=book_id),
        # 'authors_book': Author.objects.filter(books=book1),
        'authors':this_book.authors.all,
        'authors_all':Author.objects.all,
        'authors_all':Author.objects.all
    }
    return render(request,'view.html' ,context)

def add_author(request):
    print("********")
    print(request)
    this_book = Book.objects.get(id=int(request.POST['book_id']))
    this_author = Author.objects.get(id=int(request.POST['auth_id']))
    this_book.authors.add(this_author)
    return redirect("/show/" + request.POST['book_id'])