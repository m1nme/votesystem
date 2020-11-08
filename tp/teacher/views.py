from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def login(requests):
	return JsonResponse({"code": 401, "msg": "教师登陆测试接口"})