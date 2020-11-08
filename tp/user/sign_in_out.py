from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from user import models
import time,hashlib
import json
from teacher.ret import ret
# 登录处理
def signin(request):
    try:
        sign = request.session['sign']
        if sign == 'yes':
            response = JsonResponse({"error_code": 1, "msg": "landed"})
            return ret(response)
    except:
        pass

    try:
        params = json.loads(request.body)
        username = params['sno']
        tno = params['tno']
        name = params['name']
        request.session['sign'] = 'yes'
        request.session['sno'] = username
        request.session['name'] = name
        request.session['tno'] = tno

        response = JsonResponse({"error_code": 0, "msg": {"sno": username, "name": name, "tno": tno}})
        return ret(response)
    except:
        response = JsonResponse({"error_code": 1, "msg": "params error"})
        return ret(response)

# 登出处理
def signout(request):
    request.session.flush()
    response = JsonResponse({"error_code": 0, "msg": "success"})
    return ret(response)