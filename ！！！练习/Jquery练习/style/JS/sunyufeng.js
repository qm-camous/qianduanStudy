/*++++++++++++++++++++++++++++++++++++走马灯++++++++++++++++++++++++++++++++++*/
/*纵向的翻滚*/
function AutoScroll(obj) {
    $(obj).find("ul:first").animate({
            marginTop: "-22px"
        },
        500,
        function() {
            $(this).css({
                marginTop: "0px"
            }).find("li:first").appendTo(this);
        });
};
$(document).ready(function() {
    setInterval('AutoScroll("#zoumadeng1")', 1300)
});
/*+++++++++++++++++++++++++++++++++++++文本横向滚动++++++++++++++++++++++++++++++++++++++++++++*/
function scroll_left() {


    var demo = document.getElementById("demo");
    var demo1 = document.getElementById("demo1");
    var demo2 = document.getElementById("demo2");
    demo2.innerHTML=document.getElementById("demo1").innerHTML();
    function Marquee(){
        if(demo.scrollLeft-demo2.offsetWidth>=0){
            demo.scrollLeft-=demo1.offsetWidth;
        }
        else{
            demo.scrollLeft++;
        }
    }
    var myvar=setInterval(Marquee,30);
    demo.onmouseout=function (){myvar=setInterval(Marquee,30);}
    demo.onmouseover=function(){clearInterval(myvar);}

}
/*+++++++++++++++++++++++++++++++将网页中的table导出为Excel+++++++++++++++++++++++++++++++++++++++++++++++++*/

function table_excel() {
    alert("00000");
   var aa= $("#table_excel button:first").val();
    alert(aa);
    excel = new ExcelGen({
        "src_id": aa,
        "show_header": true

    });
    excel.generate();
};
