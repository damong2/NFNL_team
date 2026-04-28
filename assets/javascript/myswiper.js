// 메인배너 영역
const button = document.querySelector("#mNav button");
const nav = document.querySelector("#mNav nav");

button.addEventListener("click", () => {
  nav.classList.toggle("dropdown");
});

const menu = document.querySelectorAll(".mNav_nav > ul > li");

menu.forEach(function (menuList) {
  menuList.addEventListener("click", function () {
    const subMenu = this.querySelector("ul");

    if (subMenu.style.height === "100px") {
      subMenu.style.height = "0px";
    } else {
      subMenu.style.height = "100px";
    }
  });
});

//1920px 메뉴
const navList = document.querySelector(".header_inner .lnb > ul");

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

// sub3  -------------------------------------------------
// 탭 활성화 함수 (공통)
function activateTabFromHash() {
  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (target && target.type === "radio") {
    target.checked = true;
  }
}

// 최초 실행
document.addEventListener("DOMContentLoaded", activateTabFromHash);

// 해시 변경 감지 (⭐ 핵심)
window.addEventListener("hashchange", activateTabFromHash);
