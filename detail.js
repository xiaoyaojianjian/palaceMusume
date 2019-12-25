var bigAndSmall=document.getElementById("bigAndSmall");
var small=document.getElementById("small");
var big=document.getElementById("big");
var slider=document.getElementById("slider");
var bigPic=document.getElementById("bigPic");
var smallPic=document.getElementById("smallPic");
var picList=smallPic.getElementsByTagName("img");
var smallContent=small.getElementsByTagName("img");
small.onmouseover=function(){
    big.style.display="inline-block"
    slider.style.display="block";
}
small.onmousemove=function(e){
    slider.style.display="block";
    var bigAndSmallX=bigAndSmall.offsetLeft;
    var bigAndSmallY=bigAndSmall.offsetTop;
    var x=e.clientX-bigAndSmallX;
    var y=e.clientY-bigAndSmallY;
    var nowLeft=x-100;
    var nowTop=y-100;
    if(nowLeft<0)  {nowLeft=0;x=100;}
    if(nowLeft>200){ nowLeft=200;x=300;}
    if(nowTop<0) {nowTop=0; y=100;}
    if(nowTop>200) {nowTop=200;y=300}
    slider.style.left=nowLeft+"px";
    slider.style.top=nowTop+"px";
    bigPic.style.left=200-2*x+"px";
    bigPic.style.top=200-2*y+"px";

}
small.onmouseout=function(){
    big.style.display="none";
    slider.style.display="none";
}
for(var i=0;i<picList.length;i++){
    picList[i].onmouseover=function(){
        this.setAttribute("class","pb");
        smallContent[0].setAttribute("src",this.getAttribute("src"));
        var bigPicSrc=this.getAttribute("src").slice(0,15)+".jpg";
        bigPic.setAttribute("src",bigPicSrc);
    }
    picList[i].onmouseout=function(){
        this.removeAttribute("class");
    }
}