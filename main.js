const openNav = () => {
  let hamburger = document.querySelector(".hamburger");
  let navBar = document.querySelector(".topnav");

  hamburger.onclick = function () {
    navBar.classList.toggle("active");
  };
};

const closeMenu = () => {
  let navBar = document.querySelector(".topnav");
  navBar.classList.remove("active");
};
