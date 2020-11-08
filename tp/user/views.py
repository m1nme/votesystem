from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
import json
# Create your views here.
def login(requests):
	# return JsonResponse({"code": 401, "msg": "学生登陆测试接口"})


	response = HttpResponse(json.dumps({"code": 401, "msg": "testing login"}))
	response["Access-Control-Allow-Origin"] = "*"
	response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
	response["Access-Control-Max-Age"] = "1000"
	response["Access-Control-Allow-Headers"] = "*"
	return response