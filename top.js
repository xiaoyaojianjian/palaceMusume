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
