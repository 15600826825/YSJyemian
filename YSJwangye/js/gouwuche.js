$(function(){
	arr = getCookie("cartlist");
	var html = "";
	for (var i = 0;i<arr.length; i++){
		shopinfo = arr[i];
		html +='<ul class="neirongc">'+
				'<li class="li1"><input type="checkbox" class="ck"/></li>'+
				'<li class="li2"><img src="../img/'+shopinfo.src2+'"/><span>'+shopinfo.name+'</span></li>'+
				'<li class="li3">'+shopinfo.price+'</li>'+
				'<li class="li4" '+
				'data-id="'+ shopinfo.id +'" '+
				'data-price="'+ shopinfo.price +'" data-count="'+ shopinfo.count +'"'+
				'data-name="'+ shopinfo.name +'" data-src="'+ shopinfo.src2 +'"'+
				'>'+
				'<span class="updateCount" data-number="1">+</span>'+
				'<span class="shop-count">'+ shopinfo.count +'</span>'+
				'<span class="updateCount" data-number="-1">-</span>'+
				'</li>'+
				'<li class="li5">'+ (shopinfo.count * shopinfo.price) +'</li>'+
				'<li class="li6"><i class="fl delBtn">删除</i></li>'+
				'</ul>'
	}
	$(".main .neirong").html(html);
	
	//删除
	$(".delBtn").click(function(){
		id = $(this).parent().parent().find(".li4").data("id");
		//console.log(id);
		arr = getCookie("cartlist");
		for(var j=0;j<arr.length;j++){
			if(arr[j].id == id){
				arr.splice(j,1);
				setCookie("cartlist",JSON.stringify(arr));//改变cookie数据
				break;
			}
		}
		$(this).parent().parent().remove();
	})
	//加减商品
	$(".updateCount").click(function(){
		console.log();
		id = $(this).parent().parent().find(".li4").data("id");
		f = $(this).html();
		num = $(this).parent().find(".shop-count").html();
		n = num - 1;
		if(n == 0&& f=="-"){
			return false;
		}
		arr = getCookie("cartlist");
		for(var j=0;j<arr.length;j++){
			shopinfo = arr[j];
			if(arr[j].id == id){
				f=="+" ? arr[j].count++ : arr[j].count--;
				break;
			}
		}
		$(this).parent().find(".shop-count").html(arr[j].count);
		$(this).parent().parent().find(".li5").html(shopinfo.count * shopinfo.price);
		jiesuan();
		setCookie("cartlist",JSON.stringify(arr));
	})
	//全选
	$(".selectAll").click(function(){
		ischeck = $(this).prop("checked");
		$(".ck").prop("checked",ischeck);
		jiesuan();
	})
	//结算
	$(".main1 .btn").click(function(){
		jiesuan();
	})
	$(".ck").click(function(){
		jiesuan();
	})
	function jiesuan(){
			var sumprice = 0;
			$(".ck").each(function(index,element){
				if($(this).prop("checked")){
					sumprice +=Number($(this).parent().parent().find(".li5").html());
				}
			})
			$(".main1 .span2").html("¥"+sumprice);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})//引入
