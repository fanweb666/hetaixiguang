$.fn.clickup = function () {
	$(this).click(function () {
		$(this).parent().slideUp().siblings().slideDown('fast');
		$(this).siblings('li').removeClass("active").css('right', '-100%');
	});
}
$.fn.clickdown = function () {
	$(this).click(function () {
		$(this).siblings('.list-se').slideToggle('fast').siblings().slideToggle('fast');
		$(this).parent().siblings().children('.list-se').slideUp('fast').siblings().slideDown('fast');
		var li = $(this).siblings('.list-se').children('li');
		for (var i = 0; i < li.length; i++) {
			li.eq(i).animate({
				right: '0'
			}, i * 25);
		}
		$(this).parent().siblings().children('.list-se').children('li').removeClass("active").css('right', '-100%');
	})

}
$.fn.ad = function () {
	var t = $(this);
	console.log(t)
	for (var i = 0; i < t.length; i++) {
		var count = t.eq(i).children().children().length;
		
			t.eq(i).children('p[class=title]').append('<span>+</span>');
			t.eq(i).children('.list-se').children('p[class=title]').append('<span>-</span>');
	}
}