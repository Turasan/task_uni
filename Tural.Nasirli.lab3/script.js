// var y,w,a,b,x;



// document.querySelector("#caly").addEventListener('click', function(){
//     a = document.querySelector("#A").value;
//     b = document.querySelector("#B").value;
//     x = document.querySelector("#X").value;
//     y = (a*x + Math.E*Math.cos(b*x))/(b*x-Math.pow(Math.E, -x)*Math.sin(b*x)+1);
//     document.querySelector(".result .Y").innerText= "Y: "+y;
//    var btn =  document.createElement("button")
//    document.querySelector(".main").append(btn);
//    btn.classList.add("calw")
//    btn.innerHTML="<h2>Calculate W</h2>"
//     document.querySelector(".calw").addEventListener('click', function(){
//         a = document.querySelector("#A").value;
//         b = document.querySelector("#B").value;
//         x = document.querySelector("#X").value;
        
//         w= 1/(y*Math.pow(Math.cos(x**2),2)) - x/Math.sqrt(a**2+b**2);
//         document.querySelector(".result .W").innerText= "W: "+w;
    
//     })
// })






var y,w;

var m = 0.7;
var c = 2.1;
var a = 0.5;
var b = 1.08;
var x = 1.7;


y = (
    Math.sin(x)/(Math.sqrt(1+Math.pow(m,2)*Math.sin(x))) - (c*m*Math.sin(x))
    );
    
w = (
    ((Math.pow(Math.E,(-a*x))) * Math.sqrt(x+1)) + (Math.pow(Math.E, a*y) * Math.pow(x,a) * Math.sqrt(x+1.5))
    );

console.log("y = " + y)
console.log("w = " + w)

