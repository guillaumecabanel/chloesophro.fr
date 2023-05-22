// Menu toggle
const toggleMenuButtons = document.querySelectorAll("button[data-target='toggle-menu']");
toggleMenuButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const menu = document.getElementById("menu-mobile");
    menu.classList.toggle("hidden");
  });
});

// Close mobile menu when clicking on a link
const menuLinks = document.querySelectorAll("#menu-mobile a");
menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    const menu = document.getElementById("menu-mobile");
    menu.classList.add("hidden");
  });
});

// Menu background when scrolling
const menu = document.getElementById("menu");
document.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    menu.classList.add("bg-teal-50");
  } else {
    menu.classList.remove("bg-teal-50");
  }
});

// Smooth scrolling to anchor links
const anchorLinks = document.querySelectorAll("a[href^='#']");
anchorLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});


const testimonials = document.querySelector("[data-target='testimonials']");

function horizontalScrollToNextTestimonial() {
  testimonials.scrollBy({
    left: testimonials.offsetWidth,
    behavior: 'smooth'
  });
}

function horizontalScrollToPreviousTestimonial() {
  testimonials.scrollBy({
    left: -testimonials.offsetWidth,
    behavior: 'smooth'
  });
}

document.getElementById("next-testimonial").addEventListener("click", horizontalScrollToNextTestimonial);
document.getElementById("previous-testimonial").addEventListener("click", horizontalScrollToPreviousTestimonial);


// Beam track calendly redirects
const calendlyLinks = document.querySelectorAll("a[href^='https://calendly.com/']");
calendlyLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const linkURL = link.getAttribute("href");
    const path = linkURL.split("/").pop();
    window.beam("/calendly/" + path);
    window.location.href = linkURL;
  });
});
