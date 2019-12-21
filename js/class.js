//课程页右侧推荐课程fixed
	$(document).scroll(function(){
		let ch = $(document).height()//文档高度
		let otop = $(".recommended").offset().top		// 元素距离页面顶部距离
		let ftop = $(".footer").offset().top  //footer距离页面顶部的距离
		let stop = $(document).scrollTop()		//页面滚动上去高度
		let wh = $(window).height()		//浏览器窗口高度
		let domh = $(".recommended").height()		//元素高度
		if(stop>=900){
			$(".recommended").css({"position":"fixed","top":"20px","right":"calc((100% - 1200px)/2)","margin-top":"0"})
		}else{
			$(".recommended").css("position","relative")
		}
		// 底部边界
		 if(ftop-stop<=wh-20){
			 console.log(123)
			 $(".recommended").css({"position":"absolute","bottom":"20px","right":"calc((100% - 1200px)/2)","top":"auto"})
		 }
	})