function visiple(){
    document.querySelector("article").style.display="none";
}
function temp(elem){
    if(elem.value=="C"){
        document.querySelector(".red1").innerHTML="24";
        document.querySelector(".red2").innerHTML="27";
        document.querySelector(".red3").innerHTML="21";
        document.querySelector(".red4").innerHTML="26";
        document.querySelector(".blue1").innerHTML="18";
        document.querySelector(".blue2").innerHTML="19";
        document.querySelector(".blue3").innerHTML="16";
        document.querySelector(".blue4").innerHTML="24";
    }
    else{
        console.log((18*(5/9))+32);
        document.querySelector(".blue1").innerHTML=Math.floor((18*(9/5))+32);
        document.querySelector(".red1").innerHTML= Math.floor((27*(9/5))+32);
        document.querySelector(".red2").innerHTML= Math.floor((27*(9/5))+32);
        document.querySelector(".red3").innerHTML= Math.floor((21*(9/5))+32);
        document.querySelector(".blue4").innerHTML=Math.floor((26*(9/5))+32);
        document.querySelector(".blue2").innerHTML=Math.floor((19*(9/5))+32);
        document.querySelector(".blue3").innerHTML=Math.floor((16*(9/5))+32);
        document.querySelector(".blue4").innerHTML=Math.floor((24*(9/5))+32);
    }

}