$("body").scrollspy({ target: "#navbar" });

let nav = document.getElementById("navbar"),
  navLogo = document.querySelector(".navbar-brand");
let navbarCollapse = document.getElementById("navbar-collapse");

window.addEventListener("resize", function () {
  if (window.innerWidth < 992) {
    nav.classList.add("bg-light");
  } else nav.classList.remove("bg-light");
});

window.addEventListener("scroll", navBarScroll);
function navBarScroll() {
  let scrolled = window.pageYOffset;

  if (scrolled > 50) {
    nav.classList.add("bg-light");
    nav.style.top = 0;
  } else if (scrolled == 0) {
    nav.classList.remove("bg-light");
  } else if (window.innerWidth > 1200) {
    nav.style.top = "50px";
  }

  if (nav.classList.contains("bg-light")) {
    navLogo.style.fontSize = "30px";
  } else {
    navLogo.style.fontSize = "50px";
  }
}

let navbarToggler = document.querySelector(".navbar-toggler"),
  navbarTooglerBar = document.querySelector(".navbar-toggler__bar");
navbarToggler.addEventListener("click", function () {
  if (navbarTooglerBar.classList.contains("navbar-toggler__close")) {
    navbarTooglerBar.classList.remove("navbar-toggler__close");
  } else navbarTooglerBar.classList.add("navbar-toggler__close");
});
