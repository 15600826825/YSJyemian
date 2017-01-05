$(function(){
	var arr_prov = ["北京","辽宁","吉林","河北","黑龙江"];
	var arr_city = [["东城区","西城区","崇文区","宣武区","朝阳区","丰台区"],["沈阳","铁岭"],["长春","四平","松原"],["石家庄","保定","邢台","衡水"],["哈尔滨","齐齐哈尔","牡丹江","佳木斯"]];
	var arr_quxian = [["东城区","西城区","崇文区","宣武区","朝阳区","丰台区"],["沈阳","铁岭"],["长春","四平","松原"],["石家庄","保定","邢台","衡水"],["哈尔滨","齐齐哈尔","牡丹江","佳木斯"]];
	for(var i=0;i<arr_prov.length;i++){
		$(".prvo").append("<option>"+arr_prov[i]+"</option>")
	}
	$(".prvo").change(function(){
		$(".city").empty();
		$(".quxian").empty();
		var index = $(":selected").index()-1;
		if(index<0){
			$(".city").val("<option>请选择</option>");
			$(".quxian").val("<option>请选择</option>");
			return false;
		}
		for(var j=0;j<arr_city[index].length;j++){
			$(".city").append("<option>"+arr_city[index][j]+"</option>");
		}
		for(var m=0;m<arr_quxian[index].length;m++){
			$(".quxian").append("<option>"+arr_quxian[index][m]+"</option>");
		}
	})
	
	
	
	
	
	
	
	
	
	
})//引入
