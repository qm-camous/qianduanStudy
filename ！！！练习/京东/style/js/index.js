//鼠标经过时显示可以选择的省市
function show_position() {
    var position = document.getElementById("position");
    position.style.backgroundColor="#fff";
    position.style.color="red";
    var city=document.getElementById("city");
    city.style.display="block";
    var cities=document.getElementById("pri").childNodes;
    for(i=0;i<cities.length;i++){
        if(cities[i].click==true){
            cities[i].style.backgroundColor="red";
            cities[i].style.color="#fff";
        }
        else {
            cities[i].style.backgroundColor="#fff";
            cities[i].style.color="#000";
        }
    }
};
function hide_position() {
    var position = document.getElementById("position");
    position.style.backgroundColor="aliceblue";
    position.style.color="#999";
    var city=document.getElementById("city");
    city.style.display="none";
}
// function select() {
//     var cities=document.getElementById("pri").childNodes;
//     for(i=0;i<cities.length;i++){
//         if(cities[i].click==true){
//             cities[i].style.backgroundColor="red";
//             cities[i].style.color="#fff";
//         }
//         else {
//             cities[i].style.backgroundColor="#fff";
//             cities[i].style.color="#000";
//         }
//     }
// }