from django.shortcuts import render, HttpResponse,redirect
def index(request):
    if not 'count' in request.session:
        request.session['count'] = 1
    else: 
        request.session['count'] +=1
    return render(request,'index.html')


def clearcounter(request):
    request.session.clear()
    return redirect('/')