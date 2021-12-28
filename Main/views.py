from django.shortcuts import render

# Create your views here.
def Index(request):
	return render(request, 'index.html')

def Team(request):
	return render(request, 'team.html')