function myFunction() {
	document.addEventListener("mousemove", function() 
{ 
var scrwid = document.documentElement.clientWidth;
var mouseX = (event.clientX*100)/scrwid;
var mouseY = event.clientY;



document.querySelector(".mouse-coordinates").value = mouseX;
document.querySelector(".mouse-coordinates").disabled = true; //delete
document.querySelector(".screenwidth").value = scrwid;
document.querySelector(".screenwidth").disabled = true;
	if (mouseX < 13.8){
/*	if you want what would img(1 and 2) were moving 
		document.querySelector(".img1").classList.add("move")
		document.querySelector(".img2").classList.add("move")
*/
		document.querySelector(".img2").classList.remove("unmove")
		document.querySelector(".img3").classList.remove("move")

	}

	if ( 13.8 < mouseX && mouseX < 21.7){
		document.querySelector(".img1").classList.remove("move")
		document.querySelector(".img2").classList.remove("move")
		document.querySelector(".img3").classList.remove("move")
		document.querySelector(".img5").classList.remove("move")
	
	}

	if (mouseX>21.7 && mouseX< 30){
		document.querySelector(".img2.").classList.add("move")
		document.querySelector(".img3").classList.add("move")
		document.querySelector(".img3").classList.remove("unmove")
		document.querySelector(".img5").classList.remove("move")
	}
	if(mouseX>30 && mouseX<36){
		document.querySelector(".img2").classList.remove("unmove")
		document.querySelector(".img4").classList.remove("move")
		document.querySelector(".img4").classList.remove("unmove")
		document.querySelector(".img5").classList.remove("move")
		
	}
	if(mouseX>38&& mouseX<43){
		document.querySelector(".img3").classList.remove("move")
		document.querySelector(".img3").classList.add("unmove")
		document.querySelector(".img4").classList.remove("move")
		document.querySelector(".img4").classList.remove("unmove")
		document.querySelector(".img5").classList.remove("move")

	}
	if(mouseX>40 && mouseX < 50){
		document.querySelector(".img3").classList.add("unmove")
		document.querySelector(".img3").classList.remove("move")
		document.querySelector(".img4").classList.add("move")
		document.querySelector(".img5").classList.remove("move")
	}
	if(mouseX> 50 && mouseX <64){
		document.querySelector(".img3").classList.remove("unmove")
		document.querySelector(".img3").classList.remove("move")
		document.querySelector(".img4").classList.remove("unmove")
		document.querySelector(".img5").classList.remove("move")
		document.querySelector(".img5").classList.remove("unmove")
	}
	if(mouseX>64 && mouseX <73){
		document.querySelector(".img4").classList.remove("move")
		document.querySelector(".img4").classList.add("unmove")
		document.querySelector(".img5").classList.add("move")
	}	
	if (mouseX>73 && mouseX<78){
		document.querySelector(".img2").classList.remove("unmove")
		document.querySelector(".img3").classList.remove("move")
		document.querySelector(".img3").classList.remove("unmove")
		document.querySelector(".img4").classList.remove("unmove")
		document.querySelector(".img4").classList.remove("move")
		
		
	}
	if (mouseX>78){
		document.querySelector(".img5").classList.remove("move")
		
	}




})

   };