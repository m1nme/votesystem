from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from teacher import models
import time,hashlib
import json
from teacher.ret import ret


def getVoteInfo(request):
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
		response = JsonResponse({"error_code": 1, "msg": "ID wrong"})
		return ret(response)
# try:
	# 根据 id 从数据库中找到相应的客户记录
	info = models.vote_info.objects.get(id=voteid)
	
	response = JsonResponse({"error_code": 0,
							"voteName": info.votename,
							"intro": info.voteintro,
							"voteContent": info.votecontent,
							"type": info.votetype
							})
	return ret(response)
# except:
	response = JsonResponse({"error_code": 1, "msg": "ID wrong"})
	return ret(response)