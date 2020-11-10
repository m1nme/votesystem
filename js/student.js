$(document).ready(function () {


    $("#student_login").click(function () {

        let url = "http://127.0.0.1:8080/user/login/"
        let data = $('#student_login_form').parseForm()
        // console.log(data)
        data = JSON.stringify(data)
        // console.log(data)
        var resource = $.fn.sendPostJson(url, data)
        if(resource.error_code=="0"){
            alert("登录成功");
            window.location.href="student_list.html"
            //解决页面跳转问题
            return false
        }
        else if(resource.error_code=="1"&&resource.msg=="landed"){
            alert("已在登录状态");
            window.location.href="student_list.html"
            //解决页面跳转问题
            return false
        }
        else alert(resource.msg)
    });

    var classes = $("#list").attr('class')
    console.log(classes.length==15)
    if(classes.length==15){
        let url = "http://127.0.0.1:8080/user/getVoteList/"
        var resource = $.fn.sendGet(url)
        console.log(resource)
        if(resource.error_code=="0"){
            alert("list成功");
            for(var i in resource.data){
            
                $("#display").append('<div class="card w-75">'
                +'<div class="card-body">'
                   +' <h5 class="card-title">'+resource.data[i].voteName+'</h5>'
                    +'<p class="card-text">'+resource.data[i].intro+'</p>'
                    +'<button id='+resource.data[i].voteId+' class="btn btn-primary">查看</button>'
                +'</div></div>')

            }
            $(".btn").on("click",function(){
                window.location.href="student_voteInfo.html?"+"voteId="+$(this).attr('id')
              });
        }
        else alert(resource.msg)
    }


    var voteId =$.fn.getUrlParam("voteId")
    console.log(voteId+"++")
    if(voteId!=null){
        let url = "http://127.0.0.1:8080/user/getVoteInfo/?voteId="+voteId
        var resource = $.fn.sendGet(url)

        if(resource.error_code=="0"){
            alert("查询信息成功");
            
            $("#display").append(
            '<div class="jumbotron">'
            +'<h1 class="display-4">'+resource.voteName+'</h1>'
            +'<p class="lead">'+resource.intro+'</p>'
            +'<hr class="my-4">'
            +'<p>'+resource.type+'</p>'
            )
        }


        let url2 = "http://127.0.0.1:8080/user/showResult/?voteId="+voteId
        var resource2 = $.fn.sendGet(url2)

        if(resource2.error_code=="0"){
            alert("查询成功");

            var max = 0;
            for(var i in resource2.data){
                if(max<resource2.data[i].count)max = resource2.data[i].count
            }

            for(var i in resource2.data){
                console.log(resource2.data[i].tno)
                $("#display").append(
                    '<div style="width: 50%;margin-top: 20px;" class="progress">'
                +'<div class="progress-bar progress-bar-striped" role="progressbar" style="width: '+(resource2.data[i].count/max)*100+'%" aria-valuenow="10" aria-valuemin="0" aria-valuemax='+max+'>'+resource2.data[i].count+'</div></div>'
                +'<p>第 '+ resource.voteContent[i].name +' 组</p>')
            }
        }
        else alert(resource2.msg)
    }
});

+'<div class="form-check form-check-inline">'
+'<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">'
+'<label class="form-check-label" for="inlineCheckbox1">1</label></div>'