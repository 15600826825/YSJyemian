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

	url = location.href;
	url = url.split("?")[1];
	id = url.split("&")[0].split("=")[1];
	cname = url.split("&")[1].split("=")[1];
	$.ajax({
		type:"get",
		url:"data.json",
		async:true,
		success:function(glist){
			shopInfo = glist.list[cname];
			var html = "";
			html = '<li class="smallImg" style="display:block"><img src="../img/'+shopInfo.src2+'"/><div class="drag"></div></li>'+
					'<li class="bigCursor"><img src="../img/'+shopInfo.src2+'"/></li>'
			$(".mirror").html(html);
			// $objsmallImg = $(".main1lt .mirror .smallImg");//小图
			// $objsmallCursor = $(".main1lt .mirror .smallImg .drag");//小图可视区
			// $objbigImg = $(".bigCursor img")//大图
			// $objbigCursor = $(".bigCursor")//大图可视区
			// $objsmallImg.mousemove(function(e){
			// 	//console.log($objsmallImg.offset().top);
			// 	scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
			// 	ev = e||window.event;
			// 	j = $(this).index();
			// 	$objsmallCursor.eq(j).show();
			// 	$objbigCursor.eq(j).show().animate({
			// 		"width":482,
			// 		"height":482,
			// 		"left":490,
			// 		"top":0
			// 	},500)
			// 	$objsmallCursor.outerWidth($objsmallImg.outerWidth() / $objbigImg.outerWidth() * $objbigCursor.outerWidth());
			// 	$objsmallCursor.outerHeight($objsmallImg.outerHeight() / $objbigImg.outerHeight() * $objbigCursor.outerHeight());
			// 	scale = $objbigCursor.outerWidth()/$objsmallCursor.outerWidth();
			// 	left = ev.clientX - $objsmallImg.offset().left - $objsmallCursor.outerWidth()/2;
			// 	height = ev.clientY - $objsmallImg.offset().top - $objsmallCursor.outerHeight()/2 + scrollTop;
			// 	maxL = $objsmallImg.outerWidth()-$objsmallCursor.outerWidth();
			// 	maxT = $objsmallImg.outerHeight()-$objsmallCursor.outerHeight();
			// 	if(left<=0){
			// 		left = 0;
			// 	}else if(left>=maxL){
			// 		left = maxL;
			// 	}
			// 	if(height<=0){
			// 		height=0;
			// 	}else if(height>=maxT){
			// 		height=maxT;
			// 	}
			// 	$objsmallCursor.eq(j).css({
			// 		"top":height,
			// 		"left":left
			// 	})
			// 	$objbigImg.eq(j).css({
			// 		"top":-height*scale,
			// 		"left":-left*scale
			// 	})
			// })
			//放大镜鼠标离开时
			// $objsmallImg.mouseleave(function(){
			// 	m = $(this).index();
			// 	$objsmallCursor.eq(m).hide();
			// 	$objbigCursor.eq(m).hide().stop().animate({"width":80,"height":80,"left":200,"top":200});
			// })
			$(".main1r .p11 .a2").click(function(){
				var arr = [];
				var flag = true;
				var d = {
						"id":shopInfo.id,
						"name":shopInfo.name,
						"src1":shopInfo.src1,
						"src2":shopInfo.src2,
						"price":shopInfo.price,
						"count":1
					}
				
				arr = getCookie("cartlist");
				//console.log(arr);
				for (var j=0;j<arr.length ;j++) {
							//如果cookie中的商品编号 和 当前点击的商品编号相等
							if (arr[j].id == d.id) {
								arr[j].count++;
								flag = false;//禁止向数组中添加新商品
								break;
							}
						}
				
				if (flag) {
						arr.push(d);
					}
				str_d = JSON.stringify(arr);
				document.cookie = "cartlist=" + str_d; 
				//console.log(document.cookie);
						
			})
			$(".main1r .p11 .a1").click(function(){
				var r = window.confirm("确认要购买吗？");
				if(r){
					location.href = "gouwuche.html";
				}
			})
		}//success
	
	});//ajax
	//价格 js
	$(".main1r .rl .span2").click(function(){
		var n = $(this).index();
		$(this).css("border-color","#CF0201").siblings().css("border-color","");
		if(n == 1){
			$(".main1r .pcc .p4").html("¥ 1799.00");
			$(".main1r .pcc .p6").html("移动专享价:¥ 1699.00 ");
		}else if(n == 2){
			$(".main1r .pcc .p4").html("¥ 1899.00");
			$(".main1r .pcc .p6").html("移动专享价:¥ 1799.00 ");
		}else if(n == 3){
			$(".main1r .pcc .p4").html("¥ 1999.00");
			$(".main1r .pcc .p6").html("移动专享价:¥ 1899.00 ");
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
