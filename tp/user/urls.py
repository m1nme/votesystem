from django.urls import path

from . import views
from . import register
from . import sign_in_out
from . import getvoteList,getVoteInfo,vote,showResult

urlpatterns = [
    # path('testing/', views.testing),
    path('login/', sign_in_out.signin),
    path('register/', register.register),
    # path('signin/', sign_in_out.signin),
    path('loginout/', sign_in_out.signout),
    path('getVoteList/', getvoteList.getvoteList),
    path('getVoteInfo/', getVoteInfo.getVoteInfo),
    path('vote/', vote.vote),
    path('showResult/', showResult.showResult),
]