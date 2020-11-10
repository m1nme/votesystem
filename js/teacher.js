$(document).ready(function () {


    $("#manager_login").click(function () {

        let url = "http://127.0.0.1:8080/teacher/login/"
        let data = $('#manager_login_form').parseForm()
        // console.log(data)
        data = JSON.stringify(data)
        // console.log(data)
        var resource = $.fn.sendPostJson(url, data)
        if(resource.error_code=="0"){
            alert("登录成功");
            window.location.href="teacher_list.html"
            //解决页面跳转问题
            return false
        }
        else alert(resource.msg)
    });

    $("#newVote").click(function () {

        let url = "http://127.0.0.1:8080/teacher/newVote/"
        var param = $("#newVoteForm").parseForm();
        console.log(param)
        var param2 = {}
        var voteContent = []
        for(var i=0;i<param.voteItemName.length;i++){
            console.log(i)
                var obj = {}
                obj.name = param.voteItemName[i]
                obj.intro = param.voteItemRes[i]
                voteContent.push(obj)
        }

        param2.voteName = param.voteName
        param2.type = param.type
        param2.voteContent = voteContent
        param2.intro = param.intro
        console.log(param2)
        param2 = JSON.stringify(param2)
        console.log(param2)
        var resource = $.fn.sendPostJson(url,param2)
        if(resource.error_code=="0"){
            alert("新建成功");
            window.location.href="teacher_list.html"
            //解决页面跳转问题
            return false
        }
        else alert(resource.msg)
    });


    var classes = $("#list").attr('class')
    console.log(classes.length==15)
    if(classes.length==15){
        let url = "http://127.0.0.1:8080/teacher/getVoteList/"
        var resource = $.fn.sendGet(url)
        console.log(resource)
        if(resource.error_code=="0"){
            alert("list成功");
            for(var i in resource.data){
            
                $("#display").append('<div class="card w-75">'
                +'<div class="card-body">'
                   +' <h5 class="card-title">'+resource.data[i].voteName+'</h5>'
                    +'<p class="card-text">'+resource.data[i].intro+'</p>'
                    +'<button id='+resource.data[i].voteId+' class="query btn btn-primary">查看</button>'
                    +'<button id='+resource.data[i].voteId+' class="delete btn btn-danger">删除</button>'
                +'</div></div>')
            }
            $(".query").on("click",function(){
                window.location.href="teacher_voteInfo.html?"+"voteId="+$(this).attr('id')
              });
              $(".delete").on("click",function(){

                let url = 'http://127.0.0.1:8080/teacher/delete/?voteId='+$(this).attr('id')
                var resource = $.fn.sendGet(url)
                if(resource.error_code=="0"){
                    alert("删除成功");
                    window.location.href="teacher_list.html"
                    //解决页面跳转问题
                    return false
                }
                else alert(resource.msg)
              });
        }
        else alert(resource.msg)
    }
    var voteId =$.fn.getUrlParam("voteId")
    console.log(voteId+"++")
    if(voteId!=null){
        let url = "http://127.0.0.1:8080/teacher/showResult/?voteId="+voteId
        var resource = $.fn.sendGet(url)
        if(resource.error_code=="0"){
            alert("查询成功");

            var max = 0;
            for(var i in resource.data){
                if(max>resource.data[i].count)max = resource.data[i].count
            }

            for(var i in resource.data){
                $("#display").append('<div style="width: 50%;margin-top: 20px;" class="progress">'
                +'<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax='+max+'>+'+resource.data[i].count+'+</div></div>'
                +'<p>'+resource.data.list+'</p>')
            }
        }
        else alert(resource.msg)
    }
        
    
    
    $("#addNewVoteItem").click(function () {
        console.log(1)
        var newObj = $('<div class="form-group row"><div class="col-sm-6"><label for="voteItem">投票项目</label><input name="voteItemName" type="text" class="voteItem form-control" id="voteItem"></div><div class="col-sm-6"><label for="voteItem">仓库名</label><input name="voteItemRes" type="text" class="voteItem form-control" id="voteItem"></div></div>');
        $("#voteItemList").append(newObj)
    })
    
    $("#deleteVoteItem").click(function () {
        $("#voteItemList").children().last().remove();
    })    


});

