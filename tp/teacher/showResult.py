from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from teacher import models
import time,hashlib
import json
from teacher.ret import ret


def showResult(request):
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
	data = []
	info = {}
	for i in range(1,12):
		res = models.vote_result.objects.filter(voteid=voteid,tno=i).values()
		dist = []
		for j in res:
			print(j)
			name = j.get('sno') + j.get('sname') + '第' + j.get('stno') + '组'
			dist.append(name)
		info = {"tno": i,"count": len(res), "list": dist}
		data.append(info)
	response = JsonResponse({"error_code": 0, "data": data})
	return ret(response)