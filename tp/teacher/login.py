from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
import json
import time,hashlib
from teacher.ret import ret


def login(request):
	try:
		params = json.loads(request.body)
		username = params['teacher']
		password = params['password']
	except:
		response = JsonResponse({"error_code": 1, "msg": "params error"})
		return ret(response)
	md5 = hashlib.md5()
	md5.update(password.encode("utf-8"))
	password = md5.hexdigest()

	if username == 'admin':
		if password == 'f5db5f3b5378097c93d8e99633165fdc':
			
			request.session['isteacher'] = 'yes'

			response = JsonResponse({"error_code": 0, "msg": "success"})
			return ret(response)
		else:
			response = JsonResponse({"error_code": 1, "msg": "wrong password"})
			return ret(response)
	else:
		response = JsonResponse({"error_code": 1, "msg": "wrong username"})
		return ret(response)