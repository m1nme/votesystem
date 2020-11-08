from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from teacher import models
import time,hashlib
import json
from teacher.ret import ret


def showResult(request):
	try:
		sign = request.session['sign']
		if sign != 'yes':
			response = JsonResponse({"error_code": 1, "msg": "please login first"})
			return ret(response)
	except:
		response = JsonResponse({"error_code": 1, "msg": "please login first"})
		return ret(response)
	try:
		voteid = request.GET['voteId']
	except:
		response = JsonResponse({"error_code": 1, "msg": "params error"})
		return ret(response)
	res = models.vote_result.objects.filter(voteid=voteid).values()
	if(len(res)==0):
		response = JsonResponse({"error_code": 1, "msg": "voteId does not exist"})
		return ret(response)
	data = []
	info = {}
	for i in range(1,12):
		res = models.vote_result.objects.filter(voteid=voteid,tno=i).values()
		info = {"tno": i,"count": len(res)}
		data.append(info)
	response = JsonResponse({"error_code": 0, "data": data})
	return ret(response)







	