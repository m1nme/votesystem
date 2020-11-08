from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from teacher import models
import time,hashlib
import json
from teacher.ret import ret

def getvoteList(request):
	try:
		sign = request.session['sign']
		if sign != 'yes':
			response = JsonResponse({"error_code": 1, "msg": "please login first"})
			return ret(response)
	except:
		response = JsonResponse({"error_code": 1, "msg": "please login first"})
		return ret(response)
	data = []
	info = {}
	qs = models.vote_info.objects.filter()

	for i in qs:
		info = {"voteId": i.id,
				"voteName": i.votename,
				"intro": i.voteintro
				}
		data.append(info)

	response = JsonResponse({'error_code': 0, 'data': data},content_type="application/json,charset=utf-8")
	return ret(response)