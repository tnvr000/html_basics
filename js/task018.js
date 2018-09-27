var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var caption = document.getElementById("caption");
var close = document.getElementsByClassName("close")[0];
img.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	caption.innerHTML = this.alt;
}

close.onclick = function() {
	modal.style.display = "none";
}
