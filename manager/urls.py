from django.urls import path

from . import login,isLogin
from . import showCats,getCatInfo,modifyCatInfo
from . import showPosts,getPostInfo,modifyPostInfo
urlpatterns = [
    path('login/', login.login),
    path('isLogin/', isLogin.isLogin),

    path('showCats/', showCats.showCats),
    path('getCatInfo/', getCatInfo.getCatInfo),
    path('modifyCatInfo/', modifyCatInfo.modifyCatInfo),

    path('showPosts/', showPosts.showPosts),
    path('getPostInfo/', getPostInfo.getPostInfo),
    path('modifyPostInfo/', modifyPostInfo.modifyPostInfo),
]