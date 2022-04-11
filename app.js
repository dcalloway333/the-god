let userNum = document.getElementById("getNumber")
userNum.addEventListener("keydown", function (e) {
   if(e.keyCode == 13) {
       run(e)
   }
})
 
userNum.focus();
 
let counter = 0;
 
function run() {
//    document.getElementById("paragraph").innerHTML = "Hello World!";
//    document.getElementById("paragraph").style.backgroundColor = "green";
//    document.getElementById("paragraph").style.color = "white";
//    document.getElementById("paragraph").style.padding = "20px";
   randomNum();
   userNumber();
   compareNumbers();
 
}  
 
function randomNum() {
   let ran = Math.floor(Math.random() * 10);
//    let x = document.getElementById("random")
//    x.innerHTML = ran;
//    x.style.backgroundColor = "#280cc1";
//    x.style.color = "white";
//    x.style.padding = "20px";
//    x.style.textAlign = "center";
   return ran;
}
 
function userNumber() {
   let user = document.getElementById("getNumber").value;
//    let y = document.getElementById("userNumber");
//    y.innerHTML = user;
//    y.style.color = "white";
//    y.style.backgroundColor = "orange";
//    y.style.padding = "20px";
//    y.style.textAlign = "center";
   return user;
}
 
function compareNumbers() {
   let a = userNumber();
   let b = randomNum();
   let z = document.getElementById("compare");
   let c = document.getElementById("counter");
   if (a != b) {
       z.innerHTML = "Numbers are not the same. Computer got" + b + ", and user got" + a;
       z.style.color = "white";
       z.style.backgroundColor = "orange";
       z.style.padding = "20px";
       z.style.textAlign = "center";
       counter++;
       c.innerHTML = "you have tried" + counter + "timees."
       c.style.color = "white";
       c.style.backgroundColor = "grey";
       c.style.padding = "20px";
       c.style.textAlign = "center";
       document.querySelector("body").style.backgroundColor = 
       "brown"
   } else if (a == b) {
       z.innerHTML = "Numbers are not the same. Computer got" + b + ", and user got" + a;
       z.style.color = "purple";
       z.style.backgroundColor = "green";
       z.style.padding = "20px";
       z.style.textAlign = "center";
       c.innerHTML = "you have tried" + counter + "timees to get it right."
       c.style.color = "white";
       c.style.backgroundColor = "grey";
       c.style.padding = "20px";
       c.style.textAlign = "center";
        counter = 0;
        document.querySelector("body").style.backgroundColor = 
       "purple"
    
    }

 
   resetInput();
}
 
function resetInput() {
   document.getElementById("getNumber").value = "";
}
 
