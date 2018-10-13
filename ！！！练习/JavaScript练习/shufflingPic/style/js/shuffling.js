
window.onload=function () {
    //设置图片大小
    shufflingPic();
    //自动轮播
    shufflingLoop();
};
function shufflingPic() {
    //    *******************设置轮播图片宽高等于容器的宽高*********************
    // 获取图片容器的宽高
    var container = document.getElementById("pic");
    var width = container.offsetWidth;
    var height = container.offsetHeight;
    // 遍历得到索有轮播图并设置宽高
    var imgs=container.getElementsByTagName("img");//获取指定div的指定元素集合
    for(i=0;i<imgs.length;i++){
        imgs[i].style.width=width+"px";
        imgs[i].style.height=height+"px";
    }
};
//    ************************上一张下一张*******************************
//上一张
function preous() {
    // 获取图片容器的宽
    var container = document.getElementById("pic");
    var width = container.offsetWidth;
    // alert(typeof width);
    var imgURL=document.getElementById("pic").getElementsByTagName("ul")[0];
    var offset=parseInt(imgURL.offsetLeft)+width;
    offset=offset+"px";
    // alert(typeof imgURL.offsetLeft);
    imgURL.style.left=offset;
};
//下一张
function next() {
    // 获取图片容器的宽
    var container = document.getElementById("pic");
    var width = container.offsetWidth;
    var imgURL=document.getElementById("pic").getElementsByTagName("ul")[0];
    var offset=parseInt(imgURL.offsetLeft)-width;
    offset=offset+"px";
    alert(offset);
    imgURL.style.left=offset;
};
//  ****************************自动循环轮播****************************
function shufflingLoop() {
    // 获取图片容器的宽
    var container = document.getElementById("pic");
    var width = container.offsetWidth;
    var max=-(width*5)+"px";
    var imgURL=document.getElementById("pic").getElementsByTagName("ul")[0];
    var offset=parseInt(imgURL.offsetLeft)-width;
    offset=offset+"px";
    if(offset==max){
        imgURL.style.left="0px";
    }
    else {
        imgURL.style.left=offset;
    }
};

