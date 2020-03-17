

// menu dropdown
function dropdownFunction() {
    document.querySelector(".dropdown-content").classList.toggle("show");
  }


// slider

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slides");
 
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

  slides[slideIndex-1].style.display = "block";

}



 