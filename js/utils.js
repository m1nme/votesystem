function sendGet(url) {
    // 利用了jquery延迟对象回调的方式对ajax封装，使用done()，fail()，always()等方法进行链式回调操作
    // 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，可以考虑参数设置为对象
    $.ajax({
        url: url,
        // dataType: "jsonp",
        dataType: "json",
        type: 'GET',
        success: function (re) {
            return re
        },
        error:function(re){
            console("fail")
        }
        
    })
}

function sendPostFormData(url, data) {
    // 利用了jquery延迟对象回调的方式对ajax封装，使用done()，fail()，always()等方法进行链式回调操作
    // 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，可以考虑参数设置为对象
    $.ajax({
        url: url,
        dataType: "json",
        type: 'GET',
        data,
        success: function (re) {
            console.log(re)
        }
    })
}

function sendPostJson(url, data) {
    // 利用了jquery延迟对象回调的方式对ajax封装，使用done()，fail()，always()等方法进行链式回调操作
    // 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，可以考虑参数设置为对象
    $.ajax({
        url: "http://106.54.91.96:8080/user/login",
        dataType: "json",
        type: 'GET',
        success: function (re) {
            console.log(re)
        }
    })
}