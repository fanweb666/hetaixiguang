var baseUrl = "http://xght.langqiyun.cn/"

// var link=document.createElement('link');
var link=`<link rel="icon" href='../images/index/logo1.png' type="image/x-icon">`
$('head').append(link);
function $Http(option) {
    var defaults = {
        url: '',
        type: 'get',
        data: {},
        dataType: 'json',
        files: null,
        async: true,
        success: function () {},
        error: function () {},
        successful: function () {},
    };
    option = Object.assign(defaults, option);
    // console.log(option)
    if (option.url) {
        option.url = baseUrl + option.url
    }
    if (option.type == 'get') {
        // console.log(33)
        $.ajax(option).then(res => {
            if (res.code == 1) {
                var data = res.data;
                option.successful(res, data);
            } else {
                // console.log(res.msg)
            }
        })
    }
    if (option.type == 'post') {
        $.ajax(option).then(res => {

        })
    }
};
//时间转码器
function timeForm(value) {
    if (typeof (value) == "undefined" || value === null) return "";
    let date = new Date(value*1000);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    if (isNaN(y) && y != 0) {
        y = " ";
    }
    if (isNaN(m) && m != 0) {
        m = " ";
    } else {
        (m < 10 ? "0" + m : m);
    }
    if (isNaN(d) && d != 0) {
        d = " ";
    } else {
        (d < 10 ? "0" + d : d);
    }
    return y + "-" + m + "-" + d + " "
}
//获取年
function getYear(value) {
    if (typeof (value) == "undefined" || value === null) return "";
    let date = new Date(value*1000);
    var y = date.getFullYear();
    return y
}
//获取日期
function getriqi(value) {
    if (typeof (value) == "undefined" || value === null) return "";
    let date = new Date(value*1000);
    var m = date.getMonth() + 1;
    var d = date.getDate();

    if (isNaN(m) && m != 0) {
        m = " ";
    } else {
        (m < 10 ? "0" + m : m);
    }
    if (isNaN(d) && d != 0) {
        d = " ";
    } else {
        (d < 10 ? "0" + d : d);
    }
    return m + "-" + d + " "
}
//加载banner图
function loadBanner(type,bg){
    $Http({
        url:'api/code/code/lbt',
        data:{
            type
        },
        success:function(res){
            if(type==1){
                console.log(1)
            }else {
                if(bg=='bg'){
                    var img=baseUrl+res.data[0].img;
                    $('.banner').css('background-image',`url(${img})`)
                }else{
                    var img=baseUrl+res.data[0].img;
                    $('.lyf-banner img').attr('src',img)
                }
               
            }
        }
    })
}
//登录 |注销
var token = sessionStorage.getItem('token');
console.log($('.header-sign a'))
if (token != null) {
    if ($('.header-sign a').length) {
        $('.header-sign a').eq(0).text('注销').attr('href', 'javascript: ;')
        $('.header-sign a').eq(0).on('click', function () {
            //    console.log(33)
            layer.confirm('你确认要退出吗？', {
                btn: ['确认', '取消'],
                btn1: function (index, layero) {
                    sessionStorage.removeItem('token');
                    layer.open({
                        content: '您已退出成功！',
                        yes: function (index, layero) {
                            layer.close(index)
                            window.location.reload();
                        }
                    })

                },
                btn2: function (index) {
                    layer.close(index)
                },
            })
        });
        $('.register-text a').attr('href', 'javascript: ;');
        $('.register-text a').on('click', function () {
            layer.open({
                content: '您已登录!'
            })
        })
    }else{
        $('.index-sign a').eq(0).text('注销').attr('href', 'javascript: ;')
        $('.index-sign a').eq(0).on('click', function () {
            //    console.log(33)
            layer.confirm('你确认要退出吗？', {
                btn: ['确认', '取消'],
                btn1: function (index, layero) {
                    sessionStorage.removeItem('token');
                    layer.open({
                        content: '您已退出成功！',
                        yes: function (index, layero) {
                            layer.close(index)
                            window.location.reload();
                        }
                    })

                },
                btn2: function (index) {
                    layer.close(index)
                },
            })
        });
        $('.index-sign a').eq(1).attr('href', 'javascript: ;');
        $('.index-sign a').eq(1).on('click', function () {
            layer.open({
                content: '您已登录!'
            })
        })
    }
}

