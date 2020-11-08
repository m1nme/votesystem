from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
import json
import time,hashlib
from teacher import models
from teacher.ret import ret


def delete(request):
	try:
		sign = request.session['isteacher']
		if sign != 'yes':
			response = JsonResponse({"error_code": 1, "msg": "please login first"})
			return ret(response)
	except:
		response = JsonResponse({"error_code": 1, "msg": "please login first"})
		return ret(response)
	try:
		voteid = request.GET['voteId']
	except:
		response = JsonResponse({"error_code": 1, "msg": "ID wrong"})
		return ret(response)		
	try:
		info = models.vote_info.objects.get(id=voteid)
	except:
		response = JsonResponse({"error_code": 1, "msg": "voteId not exit"})
		return ret(response)
		
	info.delete()
	try:
		result = models.vote_result.objects.filter(voteid=voteid)
		for i in result:
			i.delete()
	except:
		pass
	response = JsonResponse({"error_code": 0, "msg": "success"})
	return ret(response)