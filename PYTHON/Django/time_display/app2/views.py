from django.shortcuts import render
from time import localtime, strftime
    
def index(request):
    context = {
    'time': strftime('%I:%M %p', localtime()),
    'date': strftime('%A %B %d'),
    }
    return render(request,'index.html', context)