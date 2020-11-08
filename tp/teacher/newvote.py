from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
import json
import time,hashlib
from teacher import models
from teacher.ret import ret

def newvote(request):
	try:
		sign = request.session['isteacher']
		if sign != 'yes':
			response = JsonResponse({"error_code": 1, "msg": "please login first"})
			return ret(response)
	except:
		response = JsonResponse({"error_code": 1, "msg": "please login first"})
		return ret(response)

	try:
		params = json.loads(request.body)
		votename = params['voteName']
		voteintro = params['intro']
		votecontent = str(params['voteContent'])
		votetype = params['type']

		record = models.vote_info.objects.create(votename=votename,
												voteintro=voteintro,
												votetype=votetype,
												votecontent=votecontent)

		response = JsonResponse({"error_code": 0, "msg": "success"})
		return ret(response)


	except:
		response = JsonResponse({"error_code": 1, "msg": "params error"})
		return ret(response)

