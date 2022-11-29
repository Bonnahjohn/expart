const navLinks = document.querySelector(".links");
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("navLinks");
  burger.classList.toggle("take");
});

// navBar bg-color change
// window.addEventListener("scroll", () => {
//   let nav = document.querySelector(".nav");
//   nav.classList.toggle("navColor", scrollY > 0);
// });
