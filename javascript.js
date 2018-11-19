
  function openGal(){
    document.getElementById('gallery').style.display="block";
  }
  function closeGal(){
    document.getElementById('gallery').style.display="none";
  }
  var slider = 1;
  showSlides(slider);
  function moveSlides(n){
    showSlides(slider+=n);
  }
  function currentSlide(n) {
    showSlides(slider = n);
}
function showSlides(n) {
var i;
var slides = document.getElementsById("mySlides");
var dots = document.getElementsById("demo");
var captionText = document.getElementById("caption");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
captionText.innerHTML = dots[slideIndex-1].alt;
}
