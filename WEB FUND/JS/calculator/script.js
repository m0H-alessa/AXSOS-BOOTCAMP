var operator = document.querySelectorAll("#operator");
var equals = document.querySelector("#equals");
//var displays = document.querySelectorAll("#display")
var firstValue = 0;
var secondValue = 0;
var op ="";
var res = 0;
var zero = 5;
// firstValue and secondValue ==> String
// 
function press1(p2){
    zero = 0;
}
function press(p1){
    if(firstValue == 0 && zero ==5){
        firstValue = p1;
    }
    else 
    {
        secondValue = p1;
    }
    document.querySelector("#display").innerText = p1;

}
function setOP(element){
    for(var i=0; i<operator.length; i++) {
        if(element[i]== '+'){
            op = "+";
            //document.querySelector("#display").innerText =;
        }
        else if(element[i]== '-'){
            op = "-";
            //document.querySelector("#display").innerText = firstValue;
        }
        else if(element[i]== '*'){
            op = "*";
            //document.querySelector("#display").innerText = firstValue;
        }
        else if(element[i]== '/'){
            op = "/";
            //document.querySelector("#display").innerText = firstValue;
        }
    }
}
function calculate(){
    console.log("*");
    if(op ==""){
        document.querySelector("#display").innerText=0;
    }
    else if(op == "+"){
        res = firstValue+secondValue;
        document.querySelector("#display").innerText=firstValue+secondValue;
    }
    else if(op == "-"){
        res = firstValue-secondValue;
        document.querySelector("#display").innerText=firstValue-secondValue;
    }
    else if(op == "*"){
        res = firstValue*secondValue;
        document.querySelector("#display").innerText=secondValue*firstValue;
    }
    else if(op == "/"){
        res = firstValue/secondValue;
        document.querySelector("#display").innerText=firstValue/secondValue;
    }
    
}
function clr(){
    op = "";
    firstValue = 0;
    secondValue = 0;
    document.querySelector("#display").innerText =0;

}
