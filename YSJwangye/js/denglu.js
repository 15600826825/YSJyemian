//$(function(){

function setCookie(name,value,exdays){
	var now = new Date();
	now.setTime(now.getTime()+exdays*24*60*60*1000); 
	
	document.cookie = name+"="+value+"; "+"Expires"+"="+now.toGMTString()+"; "; //设置cookie
}

function getCookie(name){
	//先按照； 拆分document.cookie字符串，用字符串的split（）方法
	var cookieArr = document.cookie.split("; "); //第一次分隔按； name=zhangsan age=23
	for(var i=0;i<cookieArr.length;i++){
		var arr=cookieArr[i].split("=");  //第二次分隔 = 分隔  [name,zhangsan][age, 23]
		if(name==arr[0]){
			return arr[1];
		}
	}
}

function removeCookie(name){
	setCookie(name,"",-1); // 最后一个参数-1，表示过去的一个事件，立刻失效，就表示删除cookie
}
var user = document.getElementsByClassName("txt")[0];
var pwd = document.getElementsByClassName("pass")[0];
var ch1 = document.getElementsByClassName("check")[0];
var btn = document.getElementsByClassName("btn")[0];
btn.onclick = function(){
	//ch1.attr("checked",true);
	//console.log($(".check").attr("checked"));
	if(ch1.checked){
		alert(1);
		setCookie("user", user.value,2);
		setCookie("pwd", pwd.value,3);
	}else{
		removeCookie("user");
		removeCookie("pwd");
	}
}
if(getCookie("user")){
	user.value = getCookie("user");
	pwd.value = getCookie("pwd");
	ch1.checked = true;
}







//})//引入