function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var list=document.getElementById("list");
var display=document.getElementsByClassName("display");
var collect=document.getElementsByClassName("collect");
var collectPic1=document.getElementsByClassName("collectPic1")
var tdList=list.getElementsByTagName("td");
var collectCar=document.getElementById("collectCar");
var addToCollect=document.getElementsByClassName("addToCollect");
var eachPage=document.getElementsByClassName("eachPage");
var eachLi=document.getElementsByClassName("eachLi");
var left=document.getElementById("left");
var right=document.getElementById("right");

// list.onmouseover=function(){
// 	console.log(collect[0]);
// 	console.log(display[0]);
// 	animate(collect[0],{opacity:80});
// }
console.log(collectPic1[0]);
for(var i=0;i<display.length;i++){
	tdList[i].i=i;
	tdList[i].onmouseover=function(){	
		animate(collect[this.i],{opacity:80});
	}
	tdList[i].onmouseout=function(){
		animate(collect[this.i],{opacity:0});
	}
}
for(var i=0;i<addToCollect.length;i++){
	addToCollect[i].i=i;
}
for(var i=0;i<collectPic1.length;i++){
	collectPic1[i].i=i;
}
for(var i=0;i<collectPic1.length;i++){
	collectPic1[i].setAttribute("choose","false" );
}
for(var i=0;i<collectPic1.length;i++){
	collectPic1[i].onclick=function(){
		var content=collectCar.innerHTML;
		var index=content.indexOf("(");
		var num=parseInt(content.slice(index+1,content.length));
		console.log(this.getAttribute("choose"));
		if(this.getAttribute("choose")=="false"){
			var nowNum=num+1;
			console.log(num);
			console.log(nowNum);
			collectCar.innerHTML='<img class="collectPic2" src="images01/collect.png" alt=""><a href="#">我的收藏('+nowNum+')</a>';
			this.setAttribute("src","images01/collect2.png")
			this.setAttribute("choose","true")
			addToCollect[this.i].innerHTML="取消收藏";
		}
		else if(this.getAttribute("choose")=="true"){
			var nowNum=num-1;
			console.log(num);
			console.log(nowNum);
			collectCar.innerHTML='<img class="collectPic2" src="images01/collect.png" alt=""><a href="#">我的收藏('+nowNum+')</a>';
			this.setAttribute("src","images01/collect.png")
			this.setAttribute("choose","false")
			addToCollect[this.i].innerHTML="收藏";
		}


	}
}
// window.onload=function(){
// 	eachLi[0].setAttribute("id","selected");
// 	eachPage[0].style.color="white";
// }
for(var i=0;i<eachLi.length;i++){
	eachLi[i].i=i;
	eachLi[i].onclick=function(){
		this.setAttribute("id","selected");
		eachPage[this.i].style.color="white";
		console.log(eachPage[this.i].style.color);
		for(var j=0;j<eachLi.length;j++){
			if(j!=this.i){
				eachLi[j].setAttribute("id",""); 
				eachPage[j].style.color="black";
			}
		}
	}

}
right.onclick=function(){
	var index=document.getElementById("selected").i;
	eachLi[index+1].setAttribute("id","selected");
	console.log(eachLi[index+1]);
	eachPage[index+1].style.color="white";
	console.log(eachPage[index+1]);
	for(var j=0;j<eachLi.length;j++){
		if(j!=document.getElementById("selected").i){
			eachLi[j].setAttribute("id",""); 
			eachPage[j].style.color="black";
		}
	}
}
left.onclick=function(){
	var index=document.getElementById("selected").i;
	eachLi[index-1].setAttribute("id","selected");
	eachPage[index-1].style.color="white";
	for(var j=0;j<eachLi.length;j++){
		if(j!=document.getElementById("selected").i){
			eachLi[j].setAttribute("id",""); 
			eachPage[j].style.color="black";
		}
	}
}

