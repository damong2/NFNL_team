//header scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY + window.innerHeight / 2;
  let scrollTop2 = window.scrollY;

  if (window.innerWidth <= 768) return;

  if (scrollTop2 > lastScrollTop) {
    document.querySelector("#header").classList.add("hide");
  } else {
    document.querySelector("#header").classList.remove("hide");
  }
  lastScrollTop = scrollTop2;
});

// 모바일 메뉴
const button = document.querySelector("#mNav button");
const nav = document.querySelector("#mNav nav");

button.addEventListener("click", () => {
  nav.classList.toggle("dropdown");
});

const menu = document.querySelectorAll(".mNav_nav > ul > li");

menu.forEach(function (menuList) {
  menuList.addEventListener("click", function () {
    const subMenu = this.querySelector("ul");

    if (!subMenu) return;

    if (subMenu.style.height === "120px") {
      subMenu.style.height = "0px";
      this.classList.remove("updown");
    } else {
      subMenu.style.height = "120px";
      this.classList.add("updown");
    }
  });
});

//1920px 메뉴
const navList = document.querySelector("#header .lnb > ul");

navList.addEventListener("mouseover", function () {
  navList.querySelectorAll(".submenu2").forEach(function (sub) {
    sub.style.height = "200px";
  });
  document.querySelector("#header").classList.add("on");
});

navList.addEventListener("mouseout", function () {
  navList.querySelectorAll(".submenu2").forEach(function (sub) {
    sub.style.height = "0";
  });
  document.querySelector("#header").classList.remove("on");
});

gsap.registerPlugin(ScrollTrigger);

const box1 = document.querySelector(".no1");
const box2 = document.querySelector(".no2");
const box3 = document.querySelector(".no3");
