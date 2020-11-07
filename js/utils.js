function send(url, param, type) {
    // 利用了jquery延迟对象回调的方式对ajax封装，使用done()，fail()，always()等方法进行链式回调操作
    // 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，可以考虑参数设置为对象
    return $.ajax({
    url: url,
    data: param || {},
    type: type || 'GET'
    });
    }
    // 链式回调
    ajax('www.baidu.com/getInfo').done(function(resp) {
    // 成功回调
    }).fail(function(err) {
    // 失败回调
    });


    function sendGet() {
        // 利用了jquery延迟对象回调的方式对ajax封装，使用done()，fail()，always()等方法进行链式回调操作
        // 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，可以考虑参数设置为对象
        $.ajax({
        url: "http://106.54.91.96:8080/user/login",
        // dataType: "jsonp",
        jsonp: "callback",
        beforeSend: function (XMLHttpRequest) {
            
        },
        dataType:"json",
        type:  'GET',
        success: function(re){
            console.log(re)
        }
        })
    }

    function sendPostFormData() {
        // 利用了jquery延迟对象回调的方式对ajax封装，使用done()，fail()，always()等方法进行链式回调操作
        // 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，可以考虑参数设置为对象
        $.ajax({
        url: "http://106.54.91.96:8080/user/login",
        dataType:"json",
        type:  'GET',
        success: function(re){
            console.log(re)
        }
        })
    }

    function sendPostJson() {
        // 利用了jquery延迟对象回调的方式对ajax封装，使用done()，fail()，always()等方法进行链式回调操作
        // 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，可以考虑参数设置为对象
        $.ajax({
        url: "http://106.54.91.96:8080/user/login",
        dataType:"json",
        type:  'GET',
        success: function(re){
            console.log(re)
        }
        })
    }