from django.shortcuts import render, redirect
from django.http import HttpResponse
import random

def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    if 'activities' not in request.session:
        request.session['activities'] = []
    data = {
        'gold': request.session['gold'],
        'activities': request.session['activities']
    }
    return render(request, 'index.html', data)

def process(request, location):

    earned_gold=0
    activity =''
    if location == "farm":
        earned_gold += random.randint(10, 20)
    if location == "cave":
        earned_gold += random.randint(5, 10)
    if location == "house":
        earned_gold += random.randint(2, 5)
    if location == "casino":
        earned_gold += random.randint(-50, 50)
    if earned_gold >= 0:
        activity = "Earned " + str(earned_gold) + " golds from the " + location + "!"
        color = 'green'
    else:
        activity = "Entered a casino and lost " + str(abs(earned_gold)) + " golds "
        color = 'red'
    listdict = request.session['activities']
    listdict.append({"content":activity, "class": color})
    request.session['activities'] = listdict

    request.session["gold"] += earned_gold
    return redirect ('/')
    
def reset(req):
    req.session.clear()
    return redirect('/')