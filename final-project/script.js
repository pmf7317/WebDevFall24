// This can be used to add any JavaScript functionality if needed later
document.addEventListener("DOMContentLoaded", function () {
    // Example: Scroll to top functionality
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '↑ Scroll to Top';
    scrollTopButton.style.position = 'fixed';
    scrollTopButton.style.bottom = '20px';
    scrollTopButton.style.right = '20px';
    scrollTopButton.style.padding = '10px';
    scrollTopButton.style.backgroundColor = '#333';
    scrollTopButton.style.color = 'white';
    scrollTopButton.style.border = 'none';
    scrollTopButton.style.borderRadius = '5px';
    scrollTopButton.style.cursor = 'pointer';
    document.body.appendChild(scrollTopButton);

    scrollTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


// Get all navigation buttons
const navLinks = document.querySelectorAll('#mySidenav a');

// Add click event listeners to each button
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked button
        this.classList.add('active');
    });
});


