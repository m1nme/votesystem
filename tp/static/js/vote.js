
function testLogin(){
    var url = "http://106.54.91.96:8080/user/login"
    sendGet(url)

}
function testList(){
    var url = "http://106.54.91.96:8080/user/getVoteList/"
    sendGet(url)

}
function register(){
    

    let data = $('#form1').serialize()
    var url = "http://106.54.91.96:8080/user/register/"
    console.log(url)
    sendPostFormData(url,data)
}

function login(){


    var url = "http://106.54.91.96:8080/user/signin/"
    let data = $('#login_form').serialize()
    alert(data)
    sendPostFormData(url,data)
}
