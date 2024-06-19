const mobileNav = document.getElementById("mobile-navbar");
const menuBtn = document.getElementById("menu-btn");


menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle("!right-0")
})

