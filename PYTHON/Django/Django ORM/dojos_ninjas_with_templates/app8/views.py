from multiprocessing import context
from unicodedata import name
from django.shortcuts import render,HttpResponse,redirect
from .models import Dojo,Ninja

def index(request):
    context = {
        'dojos' : Dojo.objects.all()
    }
    return render(request,"index.html" , context)

def handel(request):
    Dojo.objects.create(name = request.POST['name'],city = request.POST['city'],state = request.POST['state'])
    return redirect("/","index.html")
    
def handel1(request):
    Ninja.objects.create(first_name = request.POST['first_name'],last_name = request.POST['last_name'],dojo = Dojo.objects.get(id=request.POST['dojo']))
    print(request.POST)
    return redirect('/',"index.html")