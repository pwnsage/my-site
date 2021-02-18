
const screenWidth = window.screen.width

function myFunction() {
	document.addEventListener("mousemove", function() 
{ 
console.log(screenWidth)
var mouseX = (event.clientX*100)/screenWidth;
var mouseY = event.clientY;
let message = document.querySelector(".anput")
message.value = mouseX

	if (mouseX < 13.8){
	document.querySelector(".img1").classList.add("move")
	document.querySelector(".img2").classList.add("move")
	document.querySelector(".img2").classList.remove("unmove")
	document.querySelector(".img3").classList.remove("move")
	}

	if ( 13.8 < mouseX && mouseX < 23.8){
	document.querySelector(".img1").classList.remove("move")
	document.querySelector(".img2").classList.remove("move")
	
	
	}

	if (mouseX>23.8 && mouseX< 30){
	document.querySelector(".img2").classList.add("unmove")
	document.querySelector(".img3").classList.add("move")
	document.querySelector(".img3").classList.remove("unmove")
	}
	if(mouseX>30 && mouseX<43){
		document.querySelector(".img2").classList.remove("unmove")
		
	}
	if(mouseX>43&& mouseX<56){
		document.querySelector(".img3").classList.remove("move")

	}
	




})

   };