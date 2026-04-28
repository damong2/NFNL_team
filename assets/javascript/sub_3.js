// SUB3  -------------------------------------------------

// 탭 활성화 함수 (공통)
const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        setTimeout(() => {
          entry.target.classList.add("dot");
        }, 600);
      } else {
        entry.target.classList.remove("active");
        entry.target.classList.remove("dot");
      }
    });
  },
  {
    threshold: 0.5,
  },
);

items.forEach((item) => observer.observe(item));

// 네비 스크롤 눌렀을 때도 탭 변경
function activeTabFromHash() {
  const hash = window.location.hash;

  if (hash) {
    const targetTab = document.querySelector(hash);

    if (targetTab && targetTab.type === "radio") {
      targetTab.checked = true;
    }
  }
}

activeTabFromHash();

window.addEventListener("hashchange", activeTabFromHash);

// SUB3 - 게시판 / 영상리뷰

// 게시판 버튼
const boardBtn = document.querySelectorAll(".board_tabs ul li");

boardBtn.forEach((menu, index) => {
  menu.addEventListener("click", (e) => {
    e.preventDefault();

    boardBtn.forEach((item) => {
      item.classList.remove("active");
    });
    menu.classList.add("active");
  });
});

const pBtn = document.querySelectorAll(".page_btn ul li");

pBtn.forEach((menu, index) => {
  menu.addEventListener("click", (e) => {
    e.preventDefault();

    pBtn.forEach((item) => {
      item.classList.remove("active");
    });
    menu.classList.add("active");
  });
});

// 지금 작업중이심 영상리뷰
var swiper = new Swiper(".reviewSwiper", {
  slidesPerView: "5",
  spaceBetween: 0,
});

const videos = document.querySelectorAll(".swiper-slide iframe");

swiper.on("slideChange", () => {
  videos.forEach((video) => {
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
  });

  const activeSlide = document.querySelector(".swiper-slide-active iframe");

  if (activeSlide) {
    activeSlide.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
  }
});
