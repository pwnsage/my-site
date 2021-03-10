function move(){
	var a = document.querySelector(".detail")
	document.querySelector(".component-2").classList.toggle("move")
	document.querySelector(".component-4").classList.toggle("move")
	document.querySelector(".llama").classList.toggle("move")
	a.classList.toggle("move-2")
	document.querySelector(".name").classList.toggle("move")
	document.querySelector(".my-name").classList.toggle("move")
	document.querySelector(".surname").classList.toggle("move")
	document.querySelector(".my-surname").classList.toggle("move")
	document.querySelector(".about-me").classList.toggle("move")
	
	
	if (a.value =="in detail"){
		a.value = "hide detail"
		setTimeout(function() {
   document.querySelector(".text-about-me").classList.add("visible")
}, 600);
	}
	else{
		a.value = "in detail"
		document.querySelector(".text-about-me").classList.remove("visible")
	}

}	
