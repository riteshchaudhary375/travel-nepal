// Toggle Menu Functionality

const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = document.getElementById("i");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  //   remix icons => ri-close-line, ri-menu-line
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
