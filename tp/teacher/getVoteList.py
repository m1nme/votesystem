from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
import json
import time,hashlib
from teacher import models
from teacher.ret import ret



def getVoteList(request):
	try:
		sign = request.session['isteacher']
		if sign != 'yes':
			response = JsonResponse({"error_code": 1, "msg": "please login first"})
			return ret(response)
	except:
		response = JsonResponse({"error_code": 1, "msg": "please login first"})
		return ret(response)

	data = []
	info = {}
	qs = models.vote_info.objects.values()
	for i in qs:
		info = {"voteId": i.get('id'),
				"voteName": i.get('votename'),
				"intro": i.get('voteintro')
				}
		data.append(info)
	response = JsonResponse({'error_code': 0, 'data': data})
	return ret(response)