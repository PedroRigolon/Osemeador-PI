const menu = document.querySelector("#menu-mobile");
const menuLinks = document.querySelector(".nav_menu");
const navLogo = document.querySelector("#nav_logo");

// Display para menu Mobile
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Highlight na parte de navegação atual
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const contactMenu = document.querySelector("#contact-page");

  let scrollPos = window.scrollY;

  if (homeMenu && aboutMenu && contactMenu) {
    if (window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add("highlight");
      aboutMenu.classList.remove("highlight");
      contactMenu.classList.remove("highlight");
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
      aboutMenu.classList.add("highlight");
      homeMenu.classList.remove("highlight");
      contactMenu.classList.remove("highlight");
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
      contactMenu.classList.add("highlight");
      aboutMenu.classList.remove("highlight");
    }

    if (elem && (window.innerWidth < 960 || scrollPos > 2345)) {
      elem.classList.remove("highlight");
    }
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Fechar o menu mobile quando clicar no item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
