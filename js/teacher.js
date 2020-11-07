$(document).ready(function(){

    $("#manager_login").click(function(){

      let url = ""
      let data = $('#manager_login_form').serialize()
      alert(data)
      console.log(data)
      sendPostFormData(url,data)
    });



  });