
const screenWidth = window.screen.width

function myFunction() {
	document.addEventListener("mousemove", function() 
{ 

var mouseX = (event.clientX*100)/screenWidth;
var mouseY = event.clientY;
let message = document.querySelector(".mouse-coordinates")
message.value = mouseX

	if (mouseX < 13.8){
/*	document.querySelector(".img1").classList.add("move")
	document.querySelector(".img2").classList.add("move")
*/
	document.querySelector(".img2").classList.remove("unmove")
	document.querySelector(".img3").classList.remove("move")
	}

	if ( 13.8 < mouseX && mouseX < 21.7){
	document.querySelector(".img1").classList.remove("move")
	document.querySelector(".img2").classList.remove("move")
	document.querySelector(".img3").classList.remove("move")
	
	}

	if (mouseX>21.7 && mouseX< 30){
	document.querySelector(".img2").classList.add("unmove")
	document.querySelector(".img3").classList.add("move")
	document.querySelector(".img3").classList.remove("unmove")
	}
	if(mouseX>30 && mouseX<36){
		document.querySelector(".img2").classList.remove("unmove")
		
		
	}
	if(mouseX>38&& mouseX<43){
		document.querySelector(".img3").classList.remove("move")
		document.querySelector(".img3").classList.add("unmove")
		document.querySelector(".img4").classList.remove("move")

	}
	if(mouseX>40 && mouseX < 50){
		document.querySelector(".img3").classList.add("unmove")
		document.querySelector(".img3").classList.remove("move")
		document.querySelector(".img4").classList.add("move")
	}
	if(mouseX> 50 && mouseX <61){
		document.querySelector(".img3").classList.remove("unmove")
		document.querySelector(".img3").classList.remove("move")
		
	}
	if(mouseX>61){
		document.querySelector(".img4").classList.remove("move")
		
	}	




})

   };