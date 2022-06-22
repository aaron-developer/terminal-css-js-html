var days = " " + " " +  "Today is" + " " + new Date() ;
var i = 0;
var txt = `
' My name is Aaron i have 26 years old and like very much the informatic.'
  I am developer and tester. I like the what maked.
            ` +  days;
var speed = 40;

function typeWriter() {
  if (i < txt.length) {

    document.getElementById("machine").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

    document.getElementById("machine").style.fontSize = "14px"; // css in js - css en javascript
    document.getElementById("machine").style.transition = "10s"; // css in js - css en javascript
    document.getElementById("machine").style.color = "orange"; // css in js - css en javascript

  }
}

//------------------------------------------------

function myFunction()
 {
    var x = document.getElementById("myDIV");
    x.querySelector(".example").innerHTML = "Use the free code ,  how do you likes";
    x.querySelector(".example").style.color = "orange" ;
    x.querySelector(".example").style.fontSize = "30px"; // css in js - css en javascript

 }
