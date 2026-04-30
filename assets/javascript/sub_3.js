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
const boardList = document.querySelector(".board_list");

const boardData = {
  all: [
    ["../icons/bell.png", "[공지]", "무단 데이터 크롤링 및 AI 학습 활용 금지 안내", "운영자"],
    ["../icons/bell.png", "[공지]", "NFNL에 등록하기 위한 방법 안내", "운영자"],
    ["../icons/bell.png", "[공지]", "이벤트 관련하여 상세한 안내", "운영자"],
    ["../icons/suggestion2.png", "[추천맛집]", "이자카야 나무 인상적이어서 추천합니다", "술래동화"],
    ["../icons/question2.png", "[질문]", "NFNL 등록 문의드립니다", "자영업"],
    ["../icons/recipe2.png", "[레시피]", "완전 꿀맛 불고기 레시피 공유해요", "요리왕"],
    ["../icons/region2.png", "[지역]", "부산에서 꼭 먹어야 할 음식 알려주세요", "여행러"],
  ],

  review: [
    ["../icons/review.png", "[후기]", "우대갈비 직접 다녀온 후기입니다", "갈비킬러"],
    ["../icons/review.png", "[후기]", "웨이팅 있었지만 만족스러웠어요", "맛집킬러"],
    ["../icons/review.png", "[후기]", "분위기 좋은 이자카야 후기 남깁니다", "술래동화"],
    ["../icons/review2.png", "[후기]", "우대갈비 직접 다녀온 후기입니다", "갈비킬러"],
    ["../icons/review2.png", "[후기]", "웨이팅 있었지만 만족스러웠어요", "맛집킬러"],
    ["../icons/review2.png", "[후기]", "분위기 좋은 이자카야 후기 남깁니다", "술래동화"],
    ["../icons/review2.png", "[후기]", "우대갈비 직접 다녀온 후기입니다", "갈비킬러"],
  ],

  recipe: [
    ["../icons/recipe.png", "[레시피]", "완전 꿀맛 불고기 레시피 공유해요", "요리왕"],
    ["../icons/recipe.png", "[레시피]", "집에서 만드는 매콤 파스타 레시피", "주부9단"],
    ["../icons/recipe.png", "[레시피]", "초간단 김치볶음밥 비법", "한식러"],
    ["../icons/recipe2.png", "[레시피]", "완전 꿀맛 불고기 레시피 공유해요", "요리왕"],
    ["../icons/recipe2.png", "[레시피]", "집에서 만드는 매콤 파스타 레시피", "주부9단"],
    ["../icons/recipe2.png", "[레시피]", "초간단 김치볶음밥 비법", "한식러"],
    ["../icons/recipe2.png", "[레시피]", "완전 꿀맛 불고기 레시피 공유해요", "요리왕"],
  ],

  recommend: [
    ["../icons/suggestion.png", "[추천맛집]", "이자카야 나무 인상적이어서 추천합니다", "술래동화"],
    ["../icons/suggestion.png", "[추천맛집]", "홍대 라멘집 추천합니다", "면러버"],
    ["../icons/suggestion.png", "[추천맛집]", "성수동 디저트 맛집 발견", "슈가왕"],
    ["../icons/suggestion2.png", "[추천맛집]", "이자카야 나무 인상적이어서 추천합니다", "술래동화"],
    ["../icons/suggestion2.png", "[추천맛집]", "홍대 라멘집 추천합니다", "면러버"],
    ["../icons/suggestion2.png", "[추천맛집]", "성수동 디저트 맛집 발견", "슈가왕"],
    ["../icons/suggestion2.png", "[추천맛집]", "이자카야 나무 인상적이어서 추천합니다", "술래동화"],
  ],

  region: [
    ["../icons/region.png", "[지역]", "부산에서 꼭 먹어야 할 음식 알려주세요", "여행러"],
    ["../icons/region.png", "[지역]", "제주도 숨은 맛집 추천받아요", "돌할방"],
    ["../icons/region.png", "[지역]", "서울 강동구 맛집 공유합니다", "강동주민"],
    ["../icons/region2.png", "[지역]", "부산에서 꼭 먹어야 할 음식 알려주세요", "여행러"],
    ["../icons/region2.png", "[지역]", "제주도 숨은 맛집 추천받아요", "돌할방"],
    ["../icons/region2.png", "[지역]", "서울 강동구 맛집 공유합니다", "강동주민"],
    ["../icons/region2.png", "[지역]", "부산에서 꼭 먹어야 할 음식 알려주세요", "여행러"],
  ],

  question: [
    ["../icons/question.png", "[질문]", "NFNL 등록 문의드립니다", "자영업"],
    ["../icons/question.png", "[질문]", "맛집 제보는 어디서 하나요?", "궁금이"],
    ["../icons/question.png", "[질문]", "이벤트 참여 방법 알려주세요", "참여자"],
    ["../icons/question2.png", "[질문]", "NFNL 등록 문의드립니다", "자영업"],
    ["../icons/question2.png", "[질문]", "맛집 제보는 어디서 하나요?", "궁금이"],
    ["../icons/question2.png", "[질문]", "이벤트 참여 방법 알려주세요", "참여자"],
    ["../icons/question2.png", "[질문]", "NFNL 등록 문의드립니다", "자영업"],
  ],
};

function renderBoard(type) {
  const list = boardData[type];

  boardList.innerHTML = list
    .map((item, index) => {
      const whiteClass = index >= 3 ? "card_main_white" : "";

      return `
        <div class="board_card">
          <div class="card_inner">
            <span class="card_title">
              <img src="${item[0]}" alt="${item[1]} 아이콘" />
              <div class="card_main ${whiteClass}">
                <h3>${item[1]}</h3>
                <h3 class="card_text">${item[2]}</h3>
              </div>
            </span>
            <span class="card_meta">
              <p>${item[3]} &#124; 2026.04.12 &#124; 조회수 1234</p>
            </span>
          </div>
        </div>
      `;
    })
    .join("");

  requestAnimationFrame(() => {
    const cards = document.querySelectorAll(".board_card");

    // 탭 눌렀을 때는 일단 모여있는 상태로 초기화
    cards.forEach((card) => {
      card.classList.remove("spread");
    });

    // 사용자가 스크롤/마우스휠 했을 때 펼치기
    const spreadCards = () => {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("spread");
        }, index * 140);
      });

      window.removeEventListener("wheel", spreadCards);
      window.removeEventListener("touchmove", spreadCards);
      window.removeEventListener("scroll", spreadCards);
    };

    window.addEventListener("wheel", spreadCards, { once: true });
    window.addEventListener("touchmove", spreadCards, { once: true });
    window.addEventListener("scroll", spreadCards, { once: true });
  });
}

boardBtn.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    e.preventDefault();

    boardBtn.forEach((item) => {
      item.classList.remove("active");
    });

    menu.classList.add("active");

    const boardType = menu.dataset.board;
    renderBoard(boardType);
  });
});

renderBoard("all");

// 게시판 페이지 버튼
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
