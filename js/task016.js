function showMenu() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if(!event.target.matches(".dropbtn2")) {
		var dropdowns = document.getElementsByClassName("dropdown-content2");
		var i;
		for(i = 0; i < dropdowns.length; ++i) {
			if(dropdowns[i].classList.contains("show")) {
				dropdowns[i].classList.remove("show");
			}
		}
	}
}