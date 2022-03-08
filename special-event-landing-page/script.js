/* TOPNAV dropdown mobile menu functionality*/
function toggleNav() {
  const navLinks = document.querySelector("#topNavLinks");

  if (navLinks.className === "nav-links") {
    navLinks.classList.add("nav-active");
  } else {
    navLinks.classList.remove("nav-active");
  }
}
