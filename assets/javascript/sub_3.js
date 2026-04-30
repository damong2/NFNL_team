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

const tab01 = document.querySelector("#tab01");
const tab02 = document.querySelector("#tab02");
const tab03 = document.querySelector("#tab03");

const con1Full = document.querySelector(".con1_full");
const con2Full = document.querySelector(".con2_full");
const con3Full = document.querySelector(".con3_full");

function changeTab() {
  con1Full.style.display = tab01.checked ? "block" : "none";
  con2Full.style.display = tab02.checked ? "block" : "none";
  con3Full.style.display = tab03.checked ? "block" : "none";

  if (tab03.checked && typeof initSwiper === "function") {
    setTimeout(initSwiper, 300);
  }
}

function activeTabFromHash() {
  const hash = window.location.hash;

  if (hash === "#tab01") tab01.checked = true;
  if (hash === "#tab02") tab02.checked = true;
  if (hash === "#tab03") tab03.checked = true;

  changeTab();
}

[tab01, tab02, tab03].forEach((tab) => {
  tab.addEventListener("change", () => {
    changeTab();

    // 탭 직접 클릭했을 때 주소도 바뀌게
    history.replaceState(null, null, "#" + tab.id);
  });
});

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

// 영상리뷰 swiper
let swiper;

function playCenterVideo() {
  const swiperEl = document.querySelector(".reviewSwiper");
  if (!swiperEl || !swiper) return;

  const slides = document.querySelectorAll(".reviewSwiper .swiper-slide");
  const swiperCenter = swiperEl.getBoundingClientRect().left + swiperEl.offsetWidth / 2;

  let centerSlide = null;
  let minDistance = Infinity;

  slides.forEach((slide) => {
    const rect = slide.getBoundingClientRect();
    const slideCenter = rect.left + rect.width / 2;
    const distance = Math.abs(swiperCenter - slideCenter);

    if (distance < minDistance) {
      minDistance = distance;
      centerSlide = slide;
    }
  });

  slides.forEach((slide) => {
    const iframe = slide.querySelector("iframe");
    if (!iframe) return;

    if (slide === centerSlide) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "playVideo",
          args: "",
        }),
        "*",
      );
    } else {
      setTimeout(() => {
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: "pauseVideo",
            args: "",
          }),
          "*",
        );
      }, 300);
    }
  });
}

function initSwiper() {
  if (swiper) {
    swiper.update();
    swiper.slideToLoop(2, 0);
    swiper.autoplay.start();
    setTimeout(playCenterVideo, 500);
    return;
  }

  swiper = new Swiper(".reviewSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,

    breakpoints: {
      0: {
        spaceBetween: 15,
      },
      443: {
        spaceBetween: 26,
      },
      1201: {
        spaceBetween: 30,
      },
    },

    speed: 800,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },

    allowTouchMove: false,
    observer: true,
    observeParents: true,

    on: {
      init() {
        setTimeout(playCenterVideo, 500);
        setTimeout(playCenterVideo, 1000);
      },

      slideChange() {
        setTimeout(playCenterVideo, 100);
        setTimeout(playCenterVideo, 500);
      },

      slideChangeTransitionStart() {
        setTimeout(playCenterVideo, 100);
      },

      slideChangeTransitionEnd() {
        setTimeout(playCenterVideo, 100);
        setTimeout(playCenterVideo, 500);
        setTimeout(playCenterVideo, 1000);
      },

      autoplay() {
        setTimeout(playCenterVideo, 300);
      },

      loopFix() {
        setTimeout(playCenterVideo, 300);
      },

      breakpoint() {
        setTimeout(playCenterVideo, 300);
        setTimeout(playCenterVideo, 800);
      },

      resize() {
        swiper.update();
        setTimeout(playCenterVideo, 300);
        setTimeout(playCenterVideo, 800);
      },
    },
  });
}

window.addEventListener("load", () => {
  const tab03 = document.querySelector("#tab03");

  tab03.addEventListener("change", () => {
    if (tab03.checked) {
      setTimeout(initSwiper, 300);
    }
  });

  if (tab03.checked) {
    setTimeout(initSwiper, 300);
  }
});
