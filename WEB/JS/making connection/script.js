var counter = 500;
var x = 2;
function remove1(elem){
    document.querySelector(".my-name").innerHTML="odai sheikh";
}
function remove2(){
    document.querySelector(".first-img").remove();
    document.querySelector(".conn").innerHTML=x=x-1;

}
function remove3(){
    document.querySelector(".secound-img").remove();
    document.querySelector(".conn").innerHTML=x=x-1;

}
function myFunction(){
    counter = counter-1;
    console.log("&");
    document.querySelector(".mylogo").innerHTML = counter;
}
//document.getElementById("accept").addEventListener("click",increase);
function increase(){
    counter = counter+1;
    console.log("*");
    document.querySelector(".mylogo").innerHTML = counter;
}