$(document).ready(function () {

    $.fn.sendGet=function(url) {
        var resource
        // 利用了jquery延迟对象回调的方式对ajax封装，使用done()，fail()，always()等方法进行链式回调操作
        // 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，可以考虑参数设置为对象
        $.ajax({
            url: url,
            // dataType: "jsonp",
            dataType: "json",
            crossDomain:true, //设置跨域为true
            xhrFields: {
                withCredentials: true //默认情况下，标准的跨域请求是不会发送cookie的
            },
            async:false,
            type: 'GET',
            success: function (re) {
                resource = re
                console.log(re)
                return re
            },
            error: function (re) {
                alert("fail")
                console.log("fail")
            }

        })
    }

    $.fn.sendPostFormData = function(url, data) {
        // 利用了jquery延迟对象回调的方式对ajax封装，使用done()，fail()，always()等方法进行链式回调操作
        // 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，可以考虑参数设置为对象
        $.ajax({
            url: url,
            dataType: "json",
            // xhrFields: {
            //     withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
            // },
            type: 'POST',
            data,
            success: function (re) {
                console.log(re)
            }
        })
    }

    $.fn.sendPostJson = function(url, data) {
        // 利用了jquery延迟对象回调的方式对ajax封装，使用done()，fail()，always()等方法进行链式回调操作
        // 如果需要的参数更多，比如有跨域dataType需要设置为'jsonp'等等，可以考虑参数设置为对象
        var resource;
        $.ajax({
            url: url,
            dataType: "json",
            // xhrFields: {
            //     withCredentials: true // 发送Ajax时，Request header中会带上 Cookie 信息。
            // },
            type: 'POST',
            async:false,
            contentType: 'application/json',
            data: data,
            success: function (re) {
                    resource = re
            },
            error: function (re) {
                alert("未知错误")
            }
        })
        return resource
    }

        //扩展jquery的格式化方法
        $.fn.parseForm = function () {
            var serializeObj = {};
            var array = this.serializeArray();
            var str = this.serialize();
            $(array).each(function () {
                if (serializeObj[this.name]) {
                    if ($.isArray(serializeObj[this.name])) {
                        serializeObj[this.name].push(this.value);
                    } else {
                        serializeObj[this.name] = [serializeObj[this.name], this.value];
                    }
                } else {
                    serializeObj[this.name] = this.value;
                }
            });
            return serializeObj;
        };

});