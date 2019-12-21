$(function () {
    $('.scale-right>.sright-top').on('click', function () {
        window.location.href = "../html/yanfaguimo.html"
    })
    $('.scale-right>.sright-bottom').on('click', function () {
        window.location.href = "../html/shengcanguimo.html"
    })
    //科研平台
    $Http({
        url: 'api/scie/scie/plat',
        success: function (res) {
            //  console.log(res)
            var data = res.data;
            var str = `
             <table></table>
             <p class="hr-white"></p>
             <p class="info-title">科研平台<span>${data.title}</span></p>
             <p class="info-desc">
                 ${data.jianjie}
             </p>
             `
            $('.platform-info').html(str)
        }
    })
    //科研团队
    function loadTeam(page) {
        $Http({
            url: 'api/scie/scie/team_pc',
            data: {
                page,
            },
            success: function (res) {
                var data = res.data.data;
                var str = "";
                $.each(data, function (index, item) {
                    str += `
                    <div class="main-info">
                    <div class="info-img">
                        <img class="w-100 h-100" src=${baseUrl+item.img} alt="">
                        <div class="bg">
                            <div class="maincontent">
                                <div>
                                    <a href="javascript:;">
                                        <img src="../images/research/find.png" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="info-desc">
                        <p>${item.name}</p>
                        <p>${item.content}
                        </p>
                    </div>
                </div>  
                    `
                })
                $('.reteam-info').html(str);
            },
            successful: function (res, data) {
                var totalNum = data.last_page;
                var pageNum = parseInt(data.current_page)
                $("#reteam-page").paging({
                    pageNum, // 当前页面
                    totalNum, // 总页码
                    callback: function (page) { //回调函数
                        loadTeam(page)
                    }
                });
            }
        })
    };
    loadTeam(1)
    //科研成果
    function loadRes(page) {
        $Http({
            url: 'api/scie/scie/ach',
            data: {
                page
            },
            success: function (res) {
                console.log(res)
                var data = res.data.data;
                var str = "";
                $.each(data, function (index, item) {
                    str += `
                    <li>${item.title} <a href="./researchDetail.html?id=${item.id}"></a></li> 
                    `
                })
                $('.result ul').html(str)
            },
            successful: function (res, data) {
                var totalNum = data.last_page;
                var pageNum = parseInt(data.current_page)
                $("#result-page").paging({
                    pageNum, // 当前页面
                    totalNum, // 总页码
                    callback: function (page) { //回调函数
                        loadRes(page)
                    }
                });
            }
        })
    }

    loadRes(1)
    //基础研发
    $Http({
        url: 'api/deve/deve/strength',
        success: function (res) {
            var data = res.data[0];
            var str = `
            <div>
            <img src=${baseUrl+data.img} alt="">
        </div>
        <div class="top-text">
            <p class="hr-blue"></p>
            <p>基础研发</p>
            <p>${data.jianjie}
            </p>
            <div class="scale-icon">
                <img class="w-100 h-100" src="../images/index/scale-topicon.png" alt="">
            </div>
        </div> 
            `
            $('.sright-top').html(str)
        }
    })
    //生产基地
    $Http({
        url:'api/deve/deve/deve',
        success:function(res){
            var data = res.data[0];
            var str=`
            <div class="bottom-text">
            <p class="hr-blue"></p>
            <p>生产基地</p>
            <p>${data.name}</p>
            <p>${data.jianjie}
            </p>
            <div class="scale-icon">
                <img class="w-100 h-100"  src="../images/index/scale-bottomicon.png" alt="">
            </div>
        </div>
        <div>
            <img src=${baseUrl+data.img} alt="">
        </div>
            `
            $('.sright-bottom').html(str)
        }
    })
})