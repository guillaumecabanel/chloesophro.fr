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
if (menu){
  document.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      menu.classList.add("bg-teal-50");
    } else {
      menu.classList.remove("bg-teal-50");
    }
  });
}

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

// Horizontal scroll to next testimonial
const testimonials = document.querySelector("[data-target='testimonials']");
if(testimonials) {
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
}


// Dropdowns
const dropdowns = document.querySelectorAll("[data-controller='dropdown']");
dropdowns.forEach(function(dropdown) {
  const toggle = dropdown.querySelector("button");
  const content = dropdown.querySelector("[data-dropdown-target='subitems']");
  toggle.addEventListener("click", function() {
    content.classList.toggle("hidden");
  });
});
