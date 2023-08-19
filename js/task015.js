var slideIndex = 1;
showSlide(slideIndex);

function pushSlide(n) {
  showSlide(slideIndex += n);
}
function currentSlide(n) {
  showSlide(slideIndex = n);
}
function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  console.log(slides);
  var dots = document.getElementsByClassName("dot");
  console.log(dots);
  if (n > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < slides.length; ++i) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; ++i) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}