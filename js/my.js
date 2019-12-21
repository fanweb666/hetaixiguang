$(document).ready(function(){
	//首页，vip 6大优势切换效果
	$("body").on("mouseover",".indexGoodness1>div",function(){
		$(this).children("div").addClass("goodnessActive-n")
		$(this).siblings().children("div").addClass("goodnessActive")
		$(this).siblings().children("div").removeClass("goodnessActive-n")
	})
	
	
})