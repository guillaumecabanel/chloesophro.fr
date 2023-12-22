function horizontalScrollToNextTestimonial(){testimonials.scrollBy({left:testimonials.offsetWidth,behavior:"smooth"})}function horizontalScrollToPreviousTestimonial(){testimonials.scrollBy({left:-testimonials.offsetWidth,behavior:"smooth"})}const toggleMenuButtons=document.querySelectorAll("button[data-target='toggle-menu']");toggleMenuButtons.forEach(function(e){e.addEventListener("click",function(){document.getElementById("menu-mobile").classList.toggle("hidden")})});const menuLinks=document.querySelectorAll("#menu-mobile a");menuLinks.forEach(function(e){e.addEventListener("click",function(){document.getElementById("menu-mobile").classList.add("hidden")})});const menu=document.getElementById("menu");menu&&document.addEventListener("scroll",function(){window.scrollY>0?menu.classList.add("bg-teal-50"):menu.classList.remove("bg-teal-50")});const anchorLinks=document.querySelectorAll("a[href^='#']");anchorLinks.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});const testimonials=document.querySelector("[data-target='testimonials']");testimonials&&(document.getElementById("next-testimonial").addEventListener("click",horizontalScrollToNextTestimonial),document.getElementById("previous-testimonial").addEventListener("click",horizontalScrollToPreviousTestimonial));const dropdowns=document.querySelectorAll("[data-controller='dropdown']");dropdowns.forEach(function(e){const t=e.querySelector("button"),o=e.querySelector("[data-dropdown-target='subitems']");t.addEventListener("click",function(){o.classList.toggle("hidden")})});