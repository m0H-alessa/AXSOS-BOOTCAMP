from django.shortcuts import render,redirect
from .models import user
def first_view(request):
    context = {
    "all_the_user": user.objects.all()
    }
    return render(request, "index.html", context)

def process(request):
    newly_created_user = user(first_name=request.POST['name1'],last_name = request.POST['name2'],email=request.POST['name3'], age=request.POST['age'])
    newly_created_user.save()



    return redirect ("/first-route")