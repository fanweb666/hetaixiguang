$(function () {
    $('.footer').load('../html/footer.html', function () {})
    // console.log(123);
    $('.leader-img').on('mouseenter', 'img', function () {
        // console.log( $(this).siblings())
        $('.leader-left img').siblings().removeClass('show');
        $('.leader-left img').eq($(this).index()).addClass('show')
        $('.leader-txt').siblings().removeClass('show');
        $('.leader-txt').eq($(this).index()).addClass('show')
    })
    //集团简介
    $Http({
        url: 'api/au/au/let',
        success: function (res) {
            // console.log(res)
            var data = res.data;
            $('.desc-detail p').eq(0).text(data.title)
            $('.desc-detail p').eq(1).text(data.jianjie)
            console.log($('.desc-img>img'))
            $('.desc-img>img').attr('src', baseUrl + data.img)
        }
    })
    //领导团队
    $Http({
        url: 'api/au/au/tm',
        success: function (res) {
            var data = res.data;
            var str1 = '';
            var str2 = '';
            $.each(data, function (index, item) {
                str1 += `
                <img class="w-100 h-100" src=${baseUrl+item.img} alt="">
                `
                str2 += `
                <div class="leader-txt ">
                    <p class="leader-name">${item.name}</p>
                    <p class="leader-desc">${item.let}
                    </p>
                </div>
                `
            })
            $('.leader-left').html(str1)
            $('.leader-left img').eq(0).addClass('show')
            $('.leader-img').html(str1)
            $('.leader-txt-list').html(str2)
            $('.leader-txt-list .leader-txt').eq(0).addClass('show')
        }
    })
    //公司获得
    $Http({
        url: 'api/au/au/acq',
        success: function (res) {
            console.log(res, 4)
            var data = res.data;
            var str = ''
            $.each(data, function (index, item) {
                str += `
                <div class="swiper-slide">
                    <div class="show-part">
                        <div>
                            <img src=${baseUrl+item.img} alt="">
                        </div>
                        <p>${item.title}</p>
                    </div>
                </div>
                `
            })
            $('.honner .swiper-wrapper').html(str)
            var mySwiper = new Swiper('.honnerSwiper', {
                autoplay: 5000, //可选选项，自动滑动
                slidesPerView: 3,
                loop: true,
            })
        }
    })
    //团队风采
    $Http({
        url: 'api/au/au/ele',
        success: function (res) {
            var data = res.data;
            var str = '';
            $.each(data, function (index, item) {
                str += `
                <div class="swiper-slide">
                <img class="w-100 h-100" src=${baseUrl+item.img} alt="">
                <div class="bg">
                    <div class="maincontent">
                        <div class="swpinfo">
                            <p>—— ${item.title} ——</p>
                            <p>
                               ${item.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                `
            })
            $('.team-swiper .swiper-wrapper').html(str)
            var swiper = new Swiper('#teamSwp2', {
                slidesPerView: 4,
                spaceBetween: 40,
                loop: true,
                autoplay: true,
            });
        },
    })
    
    //企业文化
    $Http({
        url: '/api/au/au/culture',
        success: function (res) {
            var data = res.data;
            $('.cont .lyf-keyword').text('——' + data.keyword + '——')
            $('.cont .cultureinfo-cn').html(data.content)
        }
    })
    //荣誉资质
    $Http({
        url: 'api/au/au/apt',
        success: function (res) {
            var data = res.data
            var str = '';
            $.each(data, function (index, item) {
                str += `
            <div class="honner-img">
                <img src=${baseUrl+item.img} class="w-100 h-100" alt="">
            </div>
                `
            })
            $('.cont .img-container').html(str)
        }

    })
})