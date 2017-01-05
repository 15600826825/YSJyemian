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

	$(".main3r .li1 a").mouseenter(function(){
		var i = $(this).attr("rel");
		console.log(i);
		if(i == "All"){
			$(".main3r .li4 a").show();
		}else{
			$(".main3r .li4 a").each(function(index,element){
				if($(this).attr("rel") == i){
					$(this).show();
				}else{
					$(this).hide();
				}
			})
		}
		$(this).css("background-color"," #DAA520").siblings().css("background-color","");
		//$(".main3r .li4 a[rel=i]").show().siblings().hide();
	})
	/*$(".main4 .pic li").mouseenter(function(){
		$(this).css("border"," 5px solid #f2f2f2");
	})*/
	
	//ajax 加入li
	$.ajax({
		type:"get",
		url:"data.json",
		async:true,
		success:function(glist){
			var str = "";
			var html = "";
			for(var i=0;i<glist.list.length;i++){
				child = glist.list[i];
				html += '<li><img class="img1" src="../img/'+child.src1+'"/><a href="xiangqing2.html?id='+child.id+'&cname='+i+'">'+
				'<img class="img2" src="../img/'+child.src2+'"/>'+
				'<p class="p1">'+child.name+'</p>'+
				'<p class="p2">'+child.price+'</p>'+
				'<a/>'+
				'<span style="display:none" data-id="'+child.id+'" data-name="'+child.name+'" data-src1="'+child.src1+'" data-src2="'+child.src2+'" data-price="'+child.price+'"></span>'+
				'<button class="btn1">加入购物车</button>'+
				'<button class="btn2">立即购买</button>'+
				'</li>'
			}
			$(".main4 .pic").html(html);
			$(".main4 .pic li .btn1").click(function(){
				var arr = [];
				var flag = true;
				var d = {
						"id":$(this).prev().data("id"),
						"name":$(this).prev().data("name"),
						"src1":$(this).prev().data("src1"),
						"src2":$(this).prev().data("src2"),
						"price":$(this).prev().data("price"),
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
			$(".main4 .pic li .btn2").click(function(){
				var r = window.confirm("确认要购买吗？");
				if(r){
					location.href = "gouwuche.html";
				}
			})
			
			
			
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})//引入
