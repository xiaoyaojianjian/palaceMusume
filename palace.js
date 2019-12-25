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
            console.log(cur);
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

window.onload=function(){
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
    var container=document.getElementById("container");
    var navList=document.getElementById("nav").children;
    var contain=document.getElementById("contain");
    var head=document.getElementById("head");
    var roll=document.getElementById("roll");
    var index=1;
    var timer;
    var isMoving=false;
//按钮点击切换图片
    for(var i=0;i<navList.length;++i){
        navList[i].index=i;
        navList[i].onclick=function(){
            index=this.index+1;
            navAlter();
            animate(contain,{left:-778*index});
        }
    }

 //按钮换颜色的事件
    function navAlter(){
        for(var i=0;i<navList.length;++i){
            navList[i].className="";
        }
        if(index===5){
            navList[0].className="change";
        }else if(index===0){
            navList[3].className="change";
        }else{
            navList[index-1].className="change";
        }
    }
    // timer=setInterval(right.onclick,3000);
}
