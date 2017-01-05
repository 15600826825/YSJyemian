$(function(){
	$(".fuxuan").attr("checked",true);
	$(".bg .zhucec .a1").click(function(){
		var i = 120;
		var time = setInterval(function(){
			i--;
			$(".bg .zhucec .a1").html(i);
			if(i == 0){
			clearInterval(time);
			$(".bg .zhucec .a1").html("重新获取");
			}
		},1000)
	})
	$(".btn").click(function(){
		if($("#mima1").val()!=$("#mima2").val()){
			$(".mima").show();
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
})//引入
