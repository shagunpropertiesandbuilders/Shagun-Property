 // Simulate the search functionality
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('searchQuery').value.toLowerCase();
  
    const properties = document.querySelectorAll('.property-card');
    properties.forEach(property => {
      const title = property.querySelector('h3').textContent.toLowerCase();
      if (title.includes(query)) {
        property.style.display = 'block'; // Show the property
      } else {
        property.style.display = 'none'; // Hide the property
      }
    });
  });
  
// select location script (this is use to open a PDF of LOCATION)
function openWebsite(select) {
  const url = select.value;
    if (url) {
      window.open(url, '_blank'); // Opens in a new tab
    }
  }


// Automatic slideshow animation
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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


