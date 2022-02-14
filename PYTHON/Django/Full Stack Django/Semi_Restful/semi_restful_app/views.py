from multiprocessing import context
from turtle import title
from django.shortcuts import render,redirect
from .models import Show
from django.contrib import messages

def show(request):
    context= {
        'tvs':Show.objects.all
    }
    return render(request,"show.html",context)

def new(request):
    return render(request,"new.html")

def read(request ,read_id):
    context = {
        'showz' : Show.objects.get(id =read_id),
    }
    return render(request,"read.html" ,context)  

def add(request):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/new')
    else:
        Show.objects.create(title = request.POST['title'],network = request.POST['network'],desc = request.POST['desc'],
        releas = request.POST['releas'])
        c =Show.objects.get(title = request.POST['title'])
        messages.success(request, "Blog successfully updated")
        return redirect("/read/" + str(c.id))

def update(request,edit_id):
    context = {
        'show_id':Show.objects.get(id=edit_id),
    }
    return render(request,'update.html',context)

def edit(request,edit_id):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/new')
    else:
        show_to_update = Show.objects.get(id=edit_id)	
        show_to_update.desc = request.POST['desc']
        show_to_update.title =  request.POST['title']
        show_to_update.releas=  request.POST['releas']
        show_to_update.network=  request.POST['network']
        show_to_update.save()
        return redirect('/read/'+str(edit_id))

def delet(request,delet_id):
    show_to_delete = Show.objects.get(id=delet_id)	
    show_to_delete.delete()
    return redirect('/show') 
