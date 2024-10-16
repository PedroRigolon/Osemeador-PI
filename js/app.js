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
  const moreAboutMenu = document.querySelector("#moreAbout-page");
  const contactMenu = document.querySelector("#contact-page");

  let scrollPos = window.scrollY;

  const menus = [
    { element: homeMenu, limit: 450 },
    { element: aboutMenu, limit: 1300 },
    { element: moreAboutMenu, limit: 2080 },
    { element: contactMenu, limit: 3004 },
  ];

  if (homeMenu && aboutMenu && moreAboutMenu && contactMenu) {
    const isWideScreen = window.innerWidth > 960;

    if (isWideScreen) {
      for (let i = 0; i < menus.length; i++) {
        if (scrollPos < menus[i].limit) {
          menus.forEach((menu) => menu.element.classList.remove("highlight"));
          menus[i].element.classList.add("highlight");
          break;
        }
      }
    }
  }

  if (elem && (window.innerWidth < 960 || scrollPos > 3004)) {
    elem.classList.remove("highlight");
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
