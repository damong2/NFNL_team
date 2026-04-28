gsap.registerPlugin(ScrollTrigger);

const box1 = document.querySelector(".no1");
const box2 = document.querySelector(".no2");
const box3 = document.querySelector(".no3");

// box1 → 왼쪽에서
gsap.from(box1, {
  x: -300,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: box1,
    start: "top+=500 bottom",
    once: true,
  },
});

// box2 → 오른쪽에서
gsap.from(box2, {
  x: 300,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: box2,
    start: "top+=500 bottom",
    once: true,
  },
});

// box3 → 다시 왼쪽에서
gsap.from(box3, {
  x: -300,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: box3,
    start: "top+=500 bottom",
    once: true,
  },
});

// recipe
gsap.registerPlugin(ScrollTrigger);

const recipe = document.querySelectorAll(".recipe_img1-1, .recipe_img2-1, .recipe_img3-1");

// box1 → 왼쪽에서
gsap.from(recipe, {
  xPercent: -15,
  duration: 0.6,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".recipe_img1-1",
    start: "top 50%",
    once: true,
  },
});

// graph
const nums = document.querySelectorAll(".vote_num1, .vote_num2");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startAnimation();
      observer.disconnect(); // 한 번만 실행
    }
  });
});

observer.observe(document.querySelector(".graph"));

function startAnimation() {
  nums.forEach((el) => {
    const finalValue = parseFloat(el.textContent); // 51.8 같은 값
    let interval;

    interval = setInterval(() => {
      const random = (Math.random() * 100).toFixed(1); // 0~100 랜덤
      el.childNodes[0].nodeValue = random; // 숫자만 변경 (% 제외)
    }, 40);

    setTimeout(() => {
      clearInterval(interval);
      el.childNodes[0].nodeValue = finalValue.toFixed(1);
    }, 1000);
  });
}

// placeholder
const input4 = document.querySelector(".type_box4");

const media = window.matchMedia("(max-width: 570px)");

function updatePlaceholder(e) {
  if (e.matches) {
    input4.placeholder = " 추천한 음식과 꿀조합을 작성해주세요"; // 모바일용
  } else {
    input4.placeholder = " 추천한 음식과 어울리는 나만의 꿀조합을 작성해주세요"; // 원래
  }
}

// 최초 실행
updatePlaceholder(media);

// 화면 크기 바뀔 때 자동 반응
media.addEventListener("change", updatePlaceholder);

// 제출하기 버튼
function submitAlert() {
  alert("제출이 완료되었습니다.");
}
