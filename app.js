const navLinks = document.querySelector(".links");
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("navLinks");
  burger.classList.toggle("take");
});
