//加入我们
$(function(){
    //商务合作
    $Http({
        url:'api/join/join/coop',
        success:function(res){
            // console.log(res)
            var data=res.data
           var str=`
           <a href="./addUsList.html">
           <div class='border'></div>
           <div class='conTitle'>商务合作</div>
           <p>
              ${data.jianjie}
           </p>
           <img style="margin-top:54px"  src="../images/productList/right.png" alt="">
       </a>
           `  
           $('.contentA').html(str)
           $('.contentA_img').find('img').attr('src',baseUrl+data.img) 
        },
    })
    //人才战略
    $Http({
        url:'api/join/join/talents',
        success:function(res){
            // console.log(res)
            console.log(res,123213123);
            var data=res.data;
            $('.contentB .conTitle').text(data.title);
            $('.contentB p').text(data.jianjie)
            $('.contentB_img img').attr('src',baseUrl+data.img)
        }
    })
    //职位列表
    function loadJobList(page){
        $Http({
            url:'api/join/join/list',
            data:{
                page,
                limit:7,
            },
            success:function(res){
                console.log(res);
                var data=res.data.data;
                var str=""
                $.each(data,function(index,item){
                     str+=`
                    <li class="nav-item">
                    <div class="lie">
                        <div class="zhiwei">${item.	job}</div>
                        <div class="bumen"><span>${item.dep}</span><i class="jian"></i></div>
                        <div class="didian"><span>${item.site}</span><i class="jian"></i></div>
                        <div class=shijian><span>${timeForm(item.new_time)}</span><i class="jian"></i></div>
                        <div class="caozuo"><img class="active" src="../images/addUs/yq.png" alt="" srcset="">
                            <img src="../images/addUs/wyq.png" alt="" srcset=""></div>
                    </div>
                    <ul>
                        <div class="curdetail">
    
                            <div>
                                <p>职位描述：</p>
                            </div>
                            <div>
                                <p>职位类型：${item.type}</p>
                                <p>发布时间：${timeForm(item.new_time)}</p>
                                <p>有效日期：${timeForm(item.end_time)}</p>
                                <p>基本要求：${item.ask}</p>
                                <p>工作地点：${item.site}</p>
                            </div>
                            <div>`
                                var ask_dep=item.ask_dep.split(';');
                                $.each(ask_dep,function(index2,item2){
                                    str+=`
                                    <p>${item2}</p> 
                                    `
                                })
                            str+=`    </div>
                            </div>
                            <!-- <li><a href="../html/news.html"><span>新闻资讯</span></a></li> -->
                        </ul>`

                })
                $('.nav ul').html(str)
            },
            successful:function(res){
                var pageNum=parseInt(res.data.current_page);
                var totalNum=res.data.last_page;
                $("#page").paging({
                    pageNum, // 当前页面
                    totalNum, // 总页码
                    callback: function (num) { //回调函数
                        loadJobList(num)
                    }
                });
            },
        })
    }
    loadJobList(1);

    
})