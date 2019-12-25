//页首和页尾部分
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
//head部分
window.onload = function(){
    var box = document.getElementById("box");
    var oheadNavlist = document.getElementById("headnav").children;
    var slider = document.getElementById("slider");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var index = 1;
    var isMoving = false;
    for(var i = 0; i < oheadNavlist.length; i++) {
        oheadNavlist[i].index = i;
        oheadNavlist[i].onclick = function() {
            index = this.index + 1;
            headnavmove();
            animate(slider,{left:-1250*index});
        }
    }
    function headnavmove() {
        for(var i = 0; i < oheadNavlist.length; i++){
            oheadNavlist[i].className = " ";
        }
        if(index > 5){
            oheadNavlist[0].className = "action";
        }else if(index <= 0){
            oheadNavlist[4].className = "action";
        }else{
            oheadNavlist[index-1].className = "action";
        }
    }
    function next() {
        index++;
        headnavmove();
        animate(slider,{left:-1250*index},function(){
            if(index == 6){
                slider.style.left = '-1250px';
                index = 1;
            }
        });
    }
    timer = setInterval(next,3000);
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
var ophoto = document.getElementById("igug_photo");
ophoto.onmouseover = function(){
    ophoto.style.backgroundImage = 
}
ophoto.onmouseout = function(){

}

}












//main部分
