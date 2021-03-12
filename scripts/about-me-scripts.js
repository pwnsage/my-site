window.onload = function() {
    document.querySelector(".link-vk").onclick = function(){
        return !window.open("https://vk.com/idzholdigalievaset");
    }
    document.querySelector(".link-inst").onclick = function(){
        return !window.open("https://www.instagram.com/aset.zholdigaliev/");
    }
    document.querySelector(".link-wha").onclick = function(){
        return !window.open("https://wa.me/77475294992");
    }
    document.addEventListener("mousemove", function() 
{
	if (document.querySelector(".detail").value == "hide detail"){
		document.querySelector(".text-about-me.visible").style.transitionDelay = "0s"	}
})
}

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
