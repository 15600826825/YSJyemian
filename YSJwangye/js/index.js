// JavaScript Document
$(function(){

$(".navc  .li1").mouseenter(function(){
		$(".zhezhao").show();
		$(this).find(".list").show();
		$(this).find(".list li").mouseenter(function(){
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




	//banner js
	var time = setInterval(move,2000);
	page = 1;
	function move(){
		page++;
		pagechange();
	}
	function pagechange(){
		$(".banner .pic").animate({"left":-page*1272},500,function(){
			if(page==7){
				page = 1;
				$(".banner .pic").animate({"left":-1272},0);
			}else if(page==0){
				page = 6;
				$(".banner .pic").animate({"left":-1272*6},0);
			}
			yanse();
		})
	}
	function yanse(){
		$(".banner .list li").eq(page-1).css("background-color","#cc0001").siblings().css("background-color","#b7b6b4");
	}
	$(".banner").mouseenter(function(){
		clearInterval(time);
		$(".banner .rightBtn").css("display","block");
		$(".banner .leftBtn").css("display","block");
	})
	$(".banner .rightBtn").click(function(){
			page++;
			pagechange();
		});
		$(".banner .leftBtn").click(function(){
			page--;
			pagechange();
		});
	$(".banner").mouseleave(function(){
		time = setInterval(move,2000);
		$(".banner .rightBtn").css("display","");
		$(".banner .leftBtn").css("display","");
	})
	$(".banner .list li").mouseenter(function(){
		page = $(this).index()+1;
		pagechange();
	})
	//main1 js
	$(".main1 li").mouseenter(function(){
		$(this).find(".active").stop().animate({"top":155},500)
													 .parent("li")
		                       .siblings()
		                       .find(".active").stop().animate({"top":260},500);
	})
	$(".main1 li").mouseleave(function(){
		$(this).find(".active").stop().animate({"top":260},500);
	})
	//main3 js
	$(".main3 .con .ul2 .active").mouseenter(function(){
		$(this).find(".a").animate({"left":70},300);
		$(this).find(".b").animate({"left":100},300);
	})
	$(".main3 .con .ul2 .active").mouseleave(function(){
		$(this).find(".a").animate({"left":80},300);
		$(this).find(".b").animate({"left":80},300);
	})
	$(".main3 .ul1 li").mouseenter(function(){
		$(this).css("background-color","black").siblings().css("background-color","gray");
		var index = $(this).index();
		$(".main3 .con").animate({"left":-index*1220});
	})
	//main4 js
	$(".main4 .ul1 li").mouseenter(function(){
		$(this).find("span").animate({"top":-40},300);
		$(this).find("p").animate({"top":0},300);
	})
	$(".main4 .ul1 li").mouseleave(function(){
		$(this).find("span").animate({"top":0},300);
		$(this).find("p").animate({"top":40},300);
	})
	//main4l js
	count = 1;
	function countchange(){
		$(".main4l_pic").animate({"left":-count*240},500,function(){
			if(count==4){
				count = 1;
				$(".main4l_pic").animate({"left":-240},0);
			}else if(count==0){
				count = 3;
				$(".main4l_pic").animate({"left":-240*3},0);
			}
			active();
		})
	}
	function active(){
		$(".main4l .list .ul3 li").eq(count-1).css("background-color","#DAA520").siblings().css("background-color","grey");
	}
	$(".main4l .list .leftBtn").click(function(){
		count--;
		countchange();
	})
	$(".main4l .list .rightBtn").click(function(){
		count++;
		countchange();
	})
	$(".main4l .list .ul3 li").click(function(){
		$(this).css("background-color","#DAA520").siblings().css("background-color","grey");
		count = $(this).index()+1;
		countchange();
	})
	
	//function lunbo()
	function lunbo(main,item,leftBtn,rightBtn){
		this.main = main;
		this.item = item;
		this.leftBtn = leftBtn;
		this.rightBtn = rightBtn;
		this.count = 1
		this.countchange();
		this.active();
		this.btn();
	}
	lunbo.prototype.countchange = function(){
	    var that = this;
		$(that.main).animate({"left":-this.count*240},500,function(){
			if(that.count==4){
				that.count = 1;
				$(that.main).animate({"left":-240},0);
			}else if(that.count==0){
				that.count = 3;
				$(that.main).animate({"left":-240*3},0);
			}
			that.active();
		})		
	}	
	lunbo.prototype.active = function(){
		$(this.item).eq(this.count-1).css("background-color","#DAA520").siblings().css("background-color","grey");
	}
	lunbo.prototype.btn = function(){
		var that = this;
		$(this.leftBtn).click(function(){
			
			that.count--;
			that.countchange();
		})
		$(this.rightBtn).click(function(){
			 
			that.count++;
			that.countchange();
		})
		$(this.item).click(function(){
			$(this.item).css("background-color","#DAA520").siblings().css("background-color","grey");
			that.count = $(this).index()+1;
			that.countchange(); 
		})
	}
	var newlunbo = new lunbo($(".main4la .main4l_pic"),$(".main4la .list .ul3 li"),$(".main4la .list .leftBtn"),$(".main4la .list .rightBtn"));
	var newlunbo = new lunbo($(".main4lb .main4l_pic"),$(".main4lb .list .ul3 li"),$(".main4lb .list .leftBtn"),$(".main4lb .list .rightBtn"));
	var newlunbo = new lunbo($(".main4lc .main4l_pic"),$(".main4lc .list .ul3 li"),$(".main4lc .list .leftBtn"),$(".main4lc .list .rightBtn"));
	var newlunbo = new lunbo($(".main4ld .main4l_pic"),$(".main4ld .list .ul3 li"),$(".main4ld .list .leftBtn"),$(".main4ld .list .rightBtn"));
	var newlunbo = new lunbo($(".main4le .main4l_pic"),$(".main4le .list .ul3 li"),$(".main4le .list .leftBtn"),$(".main4le .list .rightBtn"));
	//main5_pic8  js
	$(".main5_pic7 li").mouseenter(function(){
		var j = $(this).index();
		$(this).css("border-color","#000000").siblings().css("border-color","gainsboro");
		$(".main5_pic8 li").eq(j).show().siblings().hide();
	})

	
})//引入

