from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from teacher import models
import time,hashlib
import json
from teacher.ret import ret

def vote(request):
	try:
		sign = request.session['sign']
		if sign != 'yes':
			response = JsonResponse({"error_code": 1, "msg": "please login first"})
			return ret(response)
	except:
		response = JsonResponse({"error_code": 1, "msg": "please login first"})
		return ret(response)
	try:
		params = json.loads(request.body)
		voteid = params['voteId']
		sno = request.session['sno']
		sname = request.session['name']
		tno = request.session['tno']
		data = params['data']

		res = models.vote_info.objects.filter(id=voteid).values()
		if(len(res)==0):
			response = JsonResponse({"error_code": 1, "msg": "voteId does not exist"})
			return ret(response)	
		res = models.vote_result.objects.filter(voteid=voteid,sno=sno).values()
		if(len(res)!=0):
			response = JsonResponse({"error_code": 1, "msg": "you have already voted before"})
			return ret(response)			
		for i in data:
			record = models.vote_result.objects.create(voteid=voteid,
														sno=sno,
														sname=sname,
														stno=tno,
														tno=i)

		response = JsonResponse({"error_code": 0, "msg": "success"})
		return ret(response)
	except:
		response = JsonResponse({"error_code": 1, "msg": "params error"})
		return ret(response)