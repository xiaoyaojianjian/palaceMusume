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
window.onload = function(){
	var picBox = document.getElementById("picBox");
	var nav1 = document.getElementById("nav1");
	var navList = nav1.getElementsByTagName("li");
	var slider = document.getElementById("slider");
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var dleft = document.getElementById("dleft"); 
	var word1 = document.getElementById("word1");
	var intervalId;
	var index = 1;
	var isMoving = false;
	//轮播下一张的函数
	function next(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index = index + 1;
		navChange();
		animate(slider,{left:-1258*index},function(){
			if(index===4){
				slider.style.left="-1258px";
				index = 1;
			}
			isMoving = false;
		});
	}
	//播放上一张图片
	function prev(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index = index - 1;
		navChange();
		animate(slider,{left:-1258*index},function(){
			if(index===0){
				slider.style.left="-3774px";
				index = 3;
			}
			isMoving = false;
		});
	}
	//开定时器,轮播图片
	var timer = setInterval(next,3000);
	//鼠标划入清定时器
	picBox.onmouseover = function(){
		left.style.display = "block";
		right.style.display = "block";
		animate(left,{opacity:50})
		animate(right,{opacity:50})
		clearInterval(timer);
	}
	//鼠标划出开定时器
	picBox.onmouseout = function(){
		animate(left,{opacity:0})
		animate(right,{opacity:0})
		timer = setInterval(next,3000); 
	}
	//点击左箭头,调用prev函数
	left.onclick = prev;
	//点击右箭头,调用next函数
	right.onclick = next;
	//点击按钮
	for(var i=0;i<navList.length;i++){
		navList[i].idx = i;
		navList[i].onclick = function(){
			index = this.idx + 1;
			navChange();
			animate(slider,{left:-1258*index})
		}
	}

	//小按钮背景切换
	function navChange(){
		for(var i=0;i<navList.length;i++){
			navList[i].className = '';
		}
		if(index===4){
			navList[0].className = "active";
		}else if(index===0){
			navList[2].className = "active";
		}else{
			navList[index-1].className = "active";
		}
	}
	
	function up(){
		marginTop = word1.style.marginTop; 
		word1.style.marginTop = (parseInt(marginTop)-1)+"px";
		console.log(marginTop);
		if(word1.style.marginTop=="-100px"){
			clearInterval(intervalId);
		}
	}

	dleft1.onmouseover = function(){
		intervalId = setInterval(up,40);
	}
	dleft1.onmouseout = function(){
		word1.style.marginTop = "0px";
		clearInterval(intervalId);
		intervalId = null;
	}
	function up2(){
		marginTop = word2.style.marginTop; 
		word2.style.marginTop = (parseInt(marginTop)-1)+"px";
		console.log(marginTop);
		if(word2.style.marginTop=="-130px"){
			clearInterval(intervalId);
		}
	}

	dleft2.onmouseover = function(){
		intervalId = setInterval(up2,40);
	}
	dleft2.onmouseout = function(){
		word2.style.marginTop = "0px";
		clearInterval(intervalId);
		intervalId = null;
	}
	function up3(){
		marginTop = word3.style.marginTop; 
		word3.style.marginTop = (parseInt(marginTop)-1)+"px";
		console.log(marginTop);
		if(word3.style.marginTop=="-200px"){
			clearInterval(intervalId);
		}
	}

	dleft3.onmouseover = function(){
		intervalId = setInterval(up3,40);
	}
	dleft3.onmouseout = function(){
		word3.style.marginTop = "0px";
		clearInterval(intervalId);
		intervalId = null;
	}
	function up4(){
		marginTop = word4.style.marginTop; 
		word4.style.marginTop = (parseInt(marginTop)-1)+"px";
		console.log(marginTop);
		if(word4.style.marginTop=="-100px"){
			clearInterval(intervalId);
		}
	}

	dleft4.onmouseover = function(){
		intervalId = setInterval(up4,40);
	}
	dleft4.onmouseout = function(){
		word4.style.marginTop = "0px";
		clearInterval(intervalId);
		intervalId = null;
	}

	var navC1=document.getElementById("navC1");
	var navC2=document.getElementById("navC2");
	console.log(navC2);
	var navC3=document.getElementById("navC3");
	var navC4=document.getElementById("navC4");
	var navC5=document.getElementById("navC5");
	var navDetailList=document.getElementsByClassName("nav_detail")
	navC2.onmouseover=function(){
		navDetailList[0].style.display="block";
	}
	navC2.onmouseout=function(){

		navDetailList[0].style.display="none";
	}
	navC3.onmouseover=function(){
	    navDetailList[1].style.display="block";
	}
	navC3.onmouseout=function(){
	    navDetailList[1].style.display="none";
	}
	navC4.onmouseover=function(){
	    navDetailList[2].style.display="block";
	}
	navC4.onmouseout=function(){
	    navDetailList[2].style.display="none";
	}
	navC5.onmouseover=function(){
	    navDetailList[3].style.display="block";
	}
	navC5.onmouseout=function(){
	    navDetailList[3].style.display="none";
	}
	for(var i=0;i<navDetailList.length;i++){
	    navDetailList[i].onmouseover=function(){
	        this.style.display="block";
	    }
	    navDetailList[i].onmouseout=function(){
	        this.style.display="none";
	    }
	}
}
	
