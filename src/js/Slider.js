let slideIndex = 0;
let updateInterval = 1000 * 60 * 1; // 1 minute
let repeatSlides = false;
showSlides(false, true);

// Next/previous controls
function plusSlides(n) {
    slideIndex += n
    showSlides(true, false);
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n
    showSlides(true, false);
}

function showSlides(manualUpdated, firstRun) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (!manualUpdated) slideIndex++;
    if (slideIndex < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    if (firstRun || repeatSlides) {
        setTimeout(showSlides, updateInterval); // Change image every updateInterval
        repeatSlides = true;
    }
}