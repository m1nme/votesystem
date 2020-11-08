from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from user import models
import time,hashlib
import json
from teacher.ret import ret

def register(request):
    try:
        params = json.loads(request.body)
        username = params['sno']
        password = params['password']
        name = params['name']
    except:
        response = JsonResponse({"error_code": 1, "msg": "params error"})
        return ret(response)
    has_user = 0

    try:
        has_user = models.Student.objects.get(sno=username)
    except:
        pass
    if has_user!=0:
        response = JsonResponse({"error_code": 1, "msg": "registed"})
        return ret(response)
    else:
        md5 = hashlib.md5()
        md5.update(password.encode("utf-8"))
        passwd = md5.hexdigest()

        models.Student.objects.create(sno=username,password=passwd,name=name)
        response = JsonResponse({"error_code": 0,"msg": "success"})
        return ret(response)