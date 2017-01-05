
$(function(){
	//nav js
	$(".navc  .li1").mouseenter(function(){
		$(".zhezhao").show();
		$(this).find(".list").show();
		$(this).find(".list>li").mouseenter(function(){
			$(this).find(".list2").show();
			$(this).css({
				"color":"#DAA520",
				"background":"url(../img/69.png) no-repeat right center"
			}).siblings().css({"color":"","background":""});
		
		});
		$(this).find(".list>li").mouseleave(function(){
			$(this).find(".list2").hide();
		})
	})
	$(".navc .li1 .list").mouseleave(function(){
		$(this).hide();
		$(".zhezhao").hide();
	})
	
	//side js
	$(".side li").mouseenter(function(){
		$(this).css("background-color","lightgoldenrodyellow");
		$(this).find("p").animate({"left":-115},300);
	})
	$(".side li").mouseleave(function(){
		$(this).css("background-color","#373737");
		$(this).find("p").animate({"left":35},100);
	})
	//回顶部js
	var scrollTop = document.documentElement.scrolllTop||document.body.scrollTop;
	$(".side2 li").eq(2).click(function(){
		$("html,body").animate({
			"scrollTop":0
		},1000);
	})
	//host js
	$(".navc .host li").mouseenter(function(){
			$(this).stop().animate({"width":112},800)
			       .siblings().stop().animate({"width":1},500);
	})	
	$(".navc .host li").mouseleave(function(){
		$(this).stop().animate({"width":1},500)
	})
	
	
	
})//引入
