$(function(){
	$(".navc  .li1").mouseenter(function(){
		$(".zhezhao").show();
		$(this).find(".list").show();
		$(this).find(".list>li").mouseenter(function(){
			$(this).find(".list2").show();
			$(this).css({
				"color":"#DAA520",
				"background":"url(img/69.png) no-repeat right center"
			}).siblings().css({"color":"","background":""});
		
		});
		$(this).find(".list>li").mouseleave(function(){
			$(this).find(".list2").hide();
			
		})
	})	

$(".navc  .li1").mouseleave(function(){
	$(".zhezhao").hide();
	$(this).find(".list").hide();

})

	$(".main1lb li").click(function(){
		var i = $(this).index();
		$(".main1lt .mirror .smallImg").eq(i).fadeIn().siblings().fadeOut();
	})
	var $objsmallImg = $(".main1lt .mirror .smallImg");//小图
	var $objsmallCursor = $(".main1lt .mirror .smallImg .drag");//小图可视区
	var $objbigImg = $(".bigCursor img")//大图
	var $objbigCursor = $(".bigCursor")//大图可视区
	$objsmallImg.mousemove(function(e){
		//console.log($objsmallImg.offset().top);
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		var ev = e||window.event;
		var j = $(this).index();
		$objsmallCursor.eq(j).show();
		$objbigCursor.eq(j).show().animate({
			"width":480,
			"height":480,
			"left":490,
			"top":0
		},500)
		$objsmallCursor.outerWidth($objsmallImg.outerWidth() / $objbigImg.outerWidth() * $objbigCursor.outerWidth());
		$objsmallCursor.outerHeight($objsmallImg.outerHeight() / $objbigImg.outerHeight() * $objbigCursor.outerHeight());
		var scale = $objbigCursor.outerWidth()/$objsmallCursor.outerWidth();
		var left = ev.clientX - $objsmallImg.offset().left - $objsmallCursor.outerWidth()/2;
		var top = ev.clientY - 181 - $objsmallCursor.outerHeight()/2 + scrollTop;
		var maxL = $objsmallImg.outerWidth()-$objsmallCursor.outerWidth();
		var maxT = $objsmallImg.outerHeight()-$objsmallCursor.outerHeight();
		if(left<=0){
			left = 0;
		}else if(left>=maxL){
			left = maxL;
		}
		if(top<=0){
			top=0;
		}else if(top>=maxT){
			top=maxT;
		}
		$objsmallCursor.eq(j).css({
			"top":top,
			"left":left
		})
		$objbigImg.eq(j).css({
			"top":-top*scale,
			"left":-left*scale
		})
	})
	//放大镜鼠标离开时
	$objsmallImg.mouseleave(function(){
		var m = $(this).index();
		$objsmallCursor.eq(m).hide();
		$objbigCursor.eq(m).hide().stop().animate({"width":80,"height":80,"left":200,"top":200});
	})
	//价格 js
	$(".main1r .rl .span2").click(function(){
		var n = $(this).index();
		$(this).css("border-color","#CF0201").siblings().css("border-color","");
		if(n == 1){
			$(".main1r .pcc .p4").html("¥ 3799.00");
			$(".main1r .pcc .p6").html("移动专享价:¥ 3599.00 ");
		}else if(n == 2){
			$(".main1r .pcc .p4").html("¥ 3899.00");
			$(".main1r .pcc .p6").html("移动专享价:¥ 3699.00 ");
		}else if(n == 3){
			$(".main1r .pcc .p4").html("¥ 3999.00");
			$(".main1r .pcc .p6").html("移动专享价:¥ 3799.00 ");
		}
	})
	$(".main1r .sl .span4").click(function(){
		var s = $(".main1r .sl .span3").val();
		var p = Number(s);
		$(".main1r .sl .span3").val(++p);
	})
	$(".main1r .sl .span2").click(function(){
		var s = $(".main1r .sl .span3").val();
		var p = Number(s);
		if(p == 1){
			$(".main1r .sl .span3").val(p);
		}else{
			$(".main1r .sl .span3").val(--p);
		}
	})
	//main2br1 js
	$(".main2br1").hover(
		function(){
		$(this).find("a").show();
	},
	function(){
		$(this).find("a").hide();
	}
	)
	$(".main2br2 div").hover(
		function(){
		$(this).find("a").show();
	},
		function(){
		$(this).find("a").hide();
	}
	)
	//main2br3 js
	$(".main2t .active").click(function(){
		var a = $(this).index()-1;
		$(".main2br3 .tab").eq(a).show().siblings().hide();
	})
	
})//引入
