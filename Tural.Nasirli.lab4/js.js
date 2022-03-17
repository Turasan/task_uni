var C,F,Km,M;




document.querySelector(".Faran").addEventListener('click', function(){
   F = document.querySelector(".F").value;
   C = (F-32)*5/9;
   document.querySelector(".result h1").innerText= "Celcius: "+C;
})

document.querySelector(".Celsi").addEventListener('click', function(){
    C = document.querySelector(".c").value;
    F = (C*9/5)+32;
    document.querySelector(".result h1").innerText= "Faranheit: "+F;
 })


 document.querySelector(".MIL").addEventListener('click', function(){
    M = document.querySelector(".mil").value;
    Km = M*1609;
    document.querySelector(".resultm h1").innerText= "km: "+Km;
 })
 
 document.querySelector(".KM").addEventListener('click', function(){
     Km = document.querySelector(".km").value;
     M = Km/1609;
     document.querySelector(".resultm h1").innerText= "Miles: "+M;
  })