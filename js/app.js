const nav = document.getElementById('page-header')
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const socials = document.getElementById("socials");

nav.addEventListener("click", function(event){
    console.log(event.target)
    let currentId = event.target.id
    if (currentId === "about"){
        let el = document.getElementById("about1")
        el.scrollIntoView(true);
        about.style.cssText = "background-color: rgb(244, 226, 229, .8); color: black;"
        
    } else if (currentId === "contact"){
        let el = document.getElementById("contact1")
        el.scrollIntoView(true);
        contact.style.cssText = "background-color: rgb(244, 226, 229, .8); color: black;"
        
    } else if (currentId === "socials"){
        let el = document.getElementById("socials1")
        el.scrollIntoView(true);
        socials.style.cssText = "background-color: rgb(244, 226, 229, .8); color: black;"
     }
    //document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}