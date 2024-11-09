// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++; // Increment the slide index

    // Reset to the first slide if the index is beyond the last
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    }

    // Deactivate all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the active slide and dot
    slides[slideIndex].style.display = "block"; // Use slideIndex directly
    if (dots[slideIndex]) { // Ensure the dot exists
        dots[slideIndex].className += " active"; // Use slideIndex directly
    }

    // Set the time between slides (e.g., 4 seconds)
    setTimeout(showSlides, 4000);
}

// Next entry functionality for historians and events
function showNextEntry(type) {
    const entries = document.querySelectorAll(`.${type}-block .entry`); // Get all entries for the specified type
    let currentIndex = Array.from(entries).findIndex(entry => entry.classList.contains('active')); // Find the current active entry

    // Hide the current entry
    entries[currentIndex].classList.remove('active');

    // Update the index to show the next entry
    currentIndex = (currentIndex + 1) % entries.length; // Loop back to the first if at the end

    // Show the next entry
    entries[currentIndex].classList.add('active');
}

function showPrevEntry(type) {
    const entries = document.querySelectorAll(`.${type}-block .entry`); // Get all entries for the specified type
    let currentIndex = Array.from(entries).findIndex(entry => entry.classList.contains('active')); // Find the current active entry

    // Hide the current entry
    entries[currentIndex].classList.remove('active');

    // Update the index to show the next entry
    currentIndex = (currentIndex - 1 + entries.length) % entries.length; // Loop back to the first if at the end

    // Show the next entry
    entries[currentIndex].classList.add('active');
}

