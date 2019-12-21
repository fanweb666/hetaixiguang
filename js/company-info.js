$(function(){
    $('.footer').load('../html/footer.html')
    // console.log(123);
    // $('.result>ul').on('click','span:nth-child(2)',function(){
    //     // console.log(333)
    //     window.location.href='../html/company-info-detail.html'
    // })
    var type_id=window.location.search.split('=')[1];
    console.log(type_id)
    $Http({
        url:'/api/info/info/liter',
        data:{type_id},
        success:function(res){
            console.log(res)
            var data=res.data;
            var str=''
            $.each(data,function(index,item){
                str+=`
                <li>${item.title} <span data-id=${item.id} id="downLoad">下载</span><span data-id=${item.id} id="detail">详情</span></li>
                `
            })
            $('.result ul').html(str)
        }
    })
    //点击详情
    var token=sessionStorage.getItem('token');
    console.log(token);
    $('.result ul').on('click','#detail',function(){
        // console.log(123)
        var id=$(this).attr('data-id')
        if(token==null){
            layer.open({
                content:'您还未登录！'
            })
        }else{
            window.location.href='../html/company-info-detail.html?id='+id
        }
    });
    $('.result ul').on('click','#downLoad',function(){
        var file_id=$(this).attr('data-id')
        if(token==null){
            layer.open({
                content:'您还未登录！'
            })
        }else{
            $Http({
                url:'api/info/info/down',
                data:{	file_id,token},
                success:function(res){
                    console.log(res)
                    if(res.code==1){
                        window.location.href=res.data;
                    }else{
                        layer.open({
                            content:res.msg
                        })
                    }
                }
            })
        }
    })
})