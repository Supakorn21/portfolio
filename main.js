const openNav = () => {
  let hamburger = document.querySelector(".hamburger");
  let navBar1 = document.querySelector(".nav-bar");
  let navBar = document.querySelector(".topnav");

  hamburger.onclick = function () {
    navBar1.classList.add("nav-active");
    navBar.classList.toggle("active");
  };
};

const closeMenu = () => {
  let navBar = document.querySelector(".topnav");
  let navBar1 = document.querySelector(".nav-bar");
  navBar.classList.remove("active");
  navBar1.classList.remove("nav-active");
};

let navBar1 = document.querySelector(".nav-bar");
let navBar = document.querySelector(".topnav");
window.onscroll = function () {
  // pageYOffset or scrollY
  if (
    window.pageYOffset > 0 ||
    (window.pageYOffset > 0 && navBar.classList === "active")
  ) {
    navBar1.classList.add("nav-active");
    // } else if (window.pageYOffset > 0 && navBar.classList === "active") {
    //   navBar1.classList.add("nav-active");
  } else {
    navBar1.classList.remove("nav-active");
    navBar.classList.remove("active");
  }
};
