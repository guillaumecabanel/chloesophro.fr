// Menu toggle
const toggleMenuButtons = document.querySelectorAll("button[data-target='toggle-menu']");
toggleMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const menu = document.getElementById("menu-mobile");
    menu.classList.toggle("hidden");
  });
});

// Close mobile menu when clicking on a link
const menuLinks = document.querySelectorAll("#menu-mobile a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu-mobile");
    menu.classList.add("hidden");
  });
});

// Menu background when scrolling
const menu = document.getElementById("menu");
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    menu.classList.add("bg-teal-50");
  } else {
    menu.classList.remove("bg-teal-50");
  }
});

// Smooth scrolling to anchor links
const anchorLinks = document.querySelectorAll("a[href^='#']");
anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});
