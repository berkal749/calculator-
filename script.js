var result = ".";


var c = document.getElementById("c");
//c.addEventListener("click",append(c.innerText));
var divide = document.getElementById("divide");
divide.addEventListener("click", function() {append(divide.innerText)});
var up7 = document.getElementById("up7");
up7.addEventListener("click",  function(){ append(up7.innerText)});
var up8 = document.getElementById("up8");
up8.addEventListener("click",function(){ append(up8.innerText)});
var up9 = document.getElementById("up9");
up9.addEventListener("click",function(){ append(up9.innerText)});
var upMul = document.getElementById("Mul");
upMul.addEventListener("click",function(){ append(upMul.innerText)});
var down4 = document.getElementById("down4");
down4.addEventListener("click",function(){ append(down4.innerText)});
var down5 = document.getElementById("down5");
down5.addEventListener("click",function(){ append(down5.innerText)});
var right6 = document.getElementById("right6");
right6.addEventListener("click",function(){ append(right6.innerText)});
var downSub = document.getElementById("downSub");
downSub.addEventListener("click",function(){ append(downSub.innerText)});
var down1 = document.getElementById("down1");
down1.addEventListener("click",function(){ append(down1.innerText)});
var down2 = document.getElementById("down2");
down2.addEventListener("click",function(){ append(down2.innerText)});
var right3 = document.getElementById("right3");
right3.addEventListener("click",function(){ append(right3.innerText)});
var downAdd = document.getElementById("Add");
downAdd.addEventListener("click", function(){append(downAdd.innerText)});
var zero = document.getElementById("zero");
zero.addEventListener("click",function(){append(zero.innerText)});

function append(text){
console.log("ayooo");
    result += text;
    var r = document.getElementById("result");
    r.innerText= result;
    
}

var equal = document.getElementById("equal");
equal.addEventListener("click",function(){esult()});
function esult(){
    var r = document.getElementById("result");
    r.innerText = eval(result);
    result="";





}