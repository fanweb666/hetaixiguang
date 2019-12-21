$(function () {
    $('.aboutus').on('click', function () {
        window.location.href = "../html/aboutus.html"
    })
    $('.scale-right>.sright-top').on('click', function () {
        window.location.href = "../html/yanfaguimo.html"
    })
    $('.scale-right>.sright-bottom').on('click', function () {
        window.location.href = "../html/shengcanguimo.html"
    })
    $('.newsR>.newsR-total').on('click', '.more-news', function () {
        window.location.href = "../html/news.html"
    })
    $('.news-info-list').on('click', '.news-info', function () {
        var id =$(this).attr('data-id')
        // console.log(id)
        window.location.href = "../html/newsDetail.html?id="+id
    })
    //    console.log( $('.news-info'))
    /*新闻中心*/
    $('.newsR-total').on('mouseenter', '.news-info', function () {
        //    console.log($(this).index())
        var index = $(this).index();
        $('.Linfo-total').siblings().removeClass('show');
        //    console.log($('.Linfo-total').eq(index-1))
        $('.Linfo-total').eq(index).addClass('show');
    });

    //研发规模
    // $Http({
    //     url: 'api/scie/scie/scale',
    //     success: function (data) {
    //         // console.log(data);
    //         var data = data.data;
    //         var str = `
    //         <div>
    //         <img src=${baseUrl+data.img} alt="">
    //          </div>
    //         <div class="top-text">
    //             <p class="hr-blue"></p>
    //             <p>${data.title}</p>
    //             <p>${data.jianjie}
    //             </p>
    //             <div class="scale-icon">
    //                 <img class="w-100 h-100" src="./images/index/scale-topicon.png" alt="">
    //             </div>
    //         </div>
    //         `
    //         $('.index-scale .sright-top').html(str)

    //     }
    // })
    //生产规模
    // $Http({
    //     url: 'api/scie/scie/production',
    //     success: function (data) {
    //         // console.log(data);
    //         var data = data.data;
    //         var str = `
    //             <div class ="bottom-text">
    //                 <p class="hr-blue"></p>
    //                 <p>${data.title}</p>
    //                 <p>${data.two_title}</p>
    //                 <p>${data.jianjie}
    //                 </p>
    //                 <div class="scale-icon">
    //                     <img class="w-100 h-100" src="./images/index/scale-bottomicon.png" alt="">
    //                 </div>
    //             </div>
    //             <div>
    //                 <img src="${baseUrl+data.img}" alt="">
    //             </div>
    //         `
    //         $('.index-scale .sright-bottom').html(str)
    //     }
    // })
    //
    $Http({
        url:"api/code/code/lbt",
        data:{type:1},
        success(res){
            console.log(res,'轮播图')
            var data=res.data;
            var str='';
            $.each(data,function(index,item){
                console.log(item)
                str+=`
                <div class="swiper-slide">
                    <div class="lyf_banner" style='background-image:url(${baseUrl+item.img})'></div>
                </div>
                `
               
            })
             $('.banner .swiper-wrapper').append(str);
                var mySwiper = new Swiper('.banner .swiper-container', {
                    speed: 1000,
                    autoplay: {
                        delay: 6000
                    }, //可选选项，自动滑动
                    loop: true,
                })
        },
    })
    //关于合泰新光
    $Http({
        url: 'api/au/au/let',
        success: function (res) {
            // console.log(res)
            var data = res.data
            var str = `
                <div class="aboutusL">
                    <img class="w-100 h-100" src="${baseUrl+data.img}" alt="">
                </div>
                <div class="aboutusR">
                    <div>
                        <p class="hr-white"></p>
                        <p>${data.title}</p>
                        <p>${data.jianjie}
                        </p>
                        
                        <div class="about-icon">
                            <img class="w-100 h-100" src="./images/index/about-icon.png" alt="">
                        </div>
                    </div>
                </div>
            `
            $('.aboutus').html(str)
        }
    })
    //行业应用 
    $Http({
        url: '/api/au/au/son_company',
        success: function (res) {
            console.log(res)
            var data = res.data
            var str=""
            console.log(data,132);
            $.each(data,function(index,item){
                str+=`
                <div class="swiper-slide">
            <div class="application-detail">
                <div class="detailL">
                    <div class="Ltop">
                        <p>${item.name}</p>
                        <p>${item.jianjie}
                        </p>
                    </div>
                    <div class="Lbottom">`
                        // $.each(['','','','',''],function(index2,item2){
                        //     str+=`
                        //         <div>
                        //             <img src=${baseUrl+item.img} alt="">
                        //          </div>
                        //     `
                        // })
                        str+=`   </div>
                        </div>
                        <div class="detailR">
                            <img class="w-100 h-100" src=${baseUrl+item.img} alt="">
                        </div>
                    </div>
                </div>  `
                 
            }) 
            $('.application .swiper-wrapper').html(str)
            var mySwiper = new Swiper('.hangyeyingyong', {
                speed:3000,
                autoplay: {
                    delay:6000
                },//可选选项，自动滑动
                loop:true,
            })
        },
    })
    //新闻中心
    $Http({
        url: 'api/news/news/three_news',
        success: function (res) {
            var data = res.data;
            var rest = data.slice(0, 3)
            // console.log(rest)
            var str = ''
            var str1 = ''
            $.each(rest, function (index, item) {
                str += `
            <div class="Linfo-total">
                <div class="Ldetail-img">
                    <img class="w-100 h-100" src=${baseUrl+item.news_img} alt="">
                </div>
                <div class="Ldetail-info">
                    <table></table>
                    <p class="data">
                        <span>${getriqi(item.time)}</span>
                        <span>${getYear(item.time)}</span>
                    </p>
                    <p class="news-title">${item.title}</p>
                    <p class="news-desc">${item.jianjie}</p>
                </div>
            </div>
            </div>
                `
                str1 += `
                <div class="news-info" data-id=${item.id}>
                <div class="info-title">
                    <p>${getriqi(item.time)}</p>
                    <p>${getYear(item.time)}</p>
                </div>
                <div class="info-detail">
                    <p>${item.title}</p>
                    <p>${item.jianjie}
                    </p>
                </div>
            </div>  
                `
            })
            $('.newsList').html(str);
            $('.Linfo-total').eq(0).addClass('show')
            $('.news-info-list').html(str1)
        }
    })
    //联系地址
    $Http({
        url:'api/link/link/link',
        success:function(res){
            console.log(res)
            var data=res.data;
            $('.zongbu p').eq(1).children('span').text(data[0].link)
            $('.zongbu p').eq(2).children('span').text('电话：'+data[0].phone)
            $('.zongbu p').eq(3).children('span').text(data[0].mail)
            $('.yanfabu p').eq(1).children('span').text(data[1].link)
            $('.yanfabu p').eq(2).children('span').text('电话：'+data[1].phone)
            $('.gongchangdizhi p').eq(1).children('span').text(data[2].link)
            $('.gongchangdizhi p').eq(2).children('span').text('电话：'+data[2].phone)
        }
    })
})