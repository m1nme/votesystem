from django.urls import path

from . import views
from . import login
from . import newvote,getVoteList,delete,showResult

urlpatterns = [
    # path('testing/', views.testing),
    path('login/', login.login),
    path('newVote/', newvote.newvote),
    path('getVoteList/', getVoteList.getVoteList),
    path('delete/', delete.delete),
    path('showResult/', showResult.showResult),
]