$(document).ready(function () {


    $("#test").click(function () {

        // var settings = {
        //     "url": "http://106.54.91.96:8080/teacher/getVoteList/",
        //     "method": "GET",
        //     "timeout": 0,
        //     "headers": {
        //       "sessionid": "yn5nuk16sc7mpwg0mbuunxv1wccwalcv",
        //       "cookie": "sessionid=yn5nuk16sc7mpwg0mbuunxv1wccwalcv"
        //     },
        //     "crossDomain":true,
        //     "xhrFields": {
        //         　　　　　　"withCredentials": true
        //         　　　　},
        //   };
          
        //   $.ajax(settings).done(function (response) {
        //     console.log(response);
        //   });
        let url = "http://localhost:8080/teacher/getVoteList/"
        $.fn.sendGet(url)
    });

    $("#manager_login").click(function () {

        let url = "http://localhost:8080/teacher/login/"
        let data = $('#manager_login_form').parseForm()
        data = JSON.stringify(data)
        var resource = $.fn.sendPostJson(url, data)
        if(resource.error_code=="0"){
            alert("登录成功");
            window.location.href="teacher_vote.html"
            //解决页面跳转问题
            return false
        }
        else alert(resource.msg)
    });

    $("#newVote").click(function () {

        let url = "http://localhost:8080/teacher/newVote/"
        var param = $("#newVoteForm").parseForm();

        sendPostJson(url,param)
    });

    $("#new").click(function () {
        $("#list").removeClass("active")
        $("#new").addClass("active")
        $("#display").empty()

        var newObj = $('<form id="newVoteForm" style="width: 30%;"><div class="form-group"><label for="voteName">投票名称</label><input name="voteName" type="text" class="form-control" id="voteName" aria-describedby="textHelp"><small id="voteNameHelp" class="form-text text-muted">投票的名称，将在列表中展示</small></div><div class="form-group"><label for="voteType">投票类型</label><input name="voteType" type="password" class="form-control" id="exampleInputPassword1"><small id="voteTypeHelp" class="form-text text-muted">每个人的投票次数限制</small></div><div id="voteItemList"><div class="form-group row"><div class="col-sm-6"><label for="voteItem">投票项目</label><input name="voteItem" type="text" class="voteItem form-control" id="voteItem"></div><div class="col-sm-6"><label for="voteItem">仓库名</label><input name="voteItem" type="text" class="voteItem form-control" id="voteItem"></div></div></div><button id="addNewVoteItem" type="button" class="col-sm-3 btn btn-primary">添加</button><button id="deleteVoteItem" type="button" class="col-sm-3 btn btn-danger">删除</button><div id="extraIntro" class="form-group"><label for="exampleFormControlTextarea1">投票说明</label><textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea></div><button id="newVote" type="submit" class="btn btn-primary">Submit</button></form>')
        $("#display").append(newObj)

    })

    $("#list").click(function () {
        
        $("#new").removeClass("active")
        $("#list").addClass("active")
        $("#display").empty()
        

        // let url = "http://106.54.91.96:8080/user/getVoteList/"
        // let resource = $.fn.sendGet(url)
        // if(resource.error_code=="0"){
        //     alert("获取成功");
        //     //解决页面跳转问题
        // }
        // else alert(resource.msg)

        var newObj = $('<form id="newVoteForm" style="width: 30%;"><div class="form-group"><label for="voteName">投票名称</label><input name="voteName" type="text" class="form-control" id="voteName" aria-describedby="textHelp"><small id="voteNameHelp" class="form-text text-muted">投票的名称，将在列表中展示</small></div><div class="form-group"><label for="voteType">投票类型</label><input name="voteType" type="password" class="form-control" id="exampleInputPassword1"><small id="voteTypeHelp" class="form-text text-muted">每个人的投票次数限制</small></div><div id="voteItemList"><div class="form-group row"><div class="col-sm-6"><label for="voteItem">投票项目</label><input name="voteItem" type="text" class="voteItem form-control" id="voteItem"></div><div class="col-sm-6"><label for="voteItem">仓库名</label><input name="voteItem" type="text" class="voteItem form-control" id="voteItem"></div></div></div><button id="addNewVoteItem" type="button" class="col-sm-3 btn btn-primary">添加</button><button id="deleteVoteItem" type="button" class="col-sm-3 btn btn-danger">删除</button><div id="extraIntro" class="form-group"><label for="exampleFormControlTextarea1">投票说明</label><textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea></div><button id="newVote" type="submit" class="btn btn-primary">Submit</button></form>')
        $("#display").append(newObj)

        var newObj = $('<ul id="ul_list" class="list-unstyled" style="width: 60%;"></ul>');
        $("#display").append(newObj)
        
        // $("#ul_list").append("<p>123</p>")

    })


    function showNew() {
        $("#display").append("")
    }
    
    
    $("#addNewVoteItem").click(function () {
        var newObj = $('<div class="form-group row"><div class="col-sm-6"><label for="voteItem">投票项目</label><input name="voteItem" type="text" class="voteItem form-control" id="voteItem"></div><div class="col-sm-6"><label for="voteItem">仓库名</label><input name="voteItem" type="text" class="voteItem form-control" id="voteItem"></div></div>');
        $("#voteItemList").append(newObj)
    })
    
    $("#deleteVoteItem").click(function () {
        $("#voteItemList").children().last().remove();
    })    

    
    // $("#list").click()

});

