// mouse effect
const cursor = document.getElementById("cursor");
const cursorImg = document.getElementById("cursorImg");
const targets = document.querySelectorAll(".hover-target");

const isPcCursor = window.matchMedia(
  "(min-width: 961px) and (hover: hover) and (pointer: fine)",
).matches;

let isHover = false;
let rippleInterval = null;
let mouseX = 0;
let mouseY = 0;

// ripple
function createRipple(x, y) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 3000);
}

// click ripple
function createClickRipple(x, y) {
  const ripple = document.createElement("div");
  ripple.className = "click-ripple";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 800);
}

/* PC에서만 커스텀 마우스 실행 */
if (isPcCursor) {
  // 마우스 위치 추적
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  // hover
  targets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      isHover = true;
      cursorImg.src = "../icons/m1_50_r.png";

      rippleInterval = setInterval(() => {
        createRipple(mouseX, mouseY);
      }, 700);
    });

    el.addEventListener("mouseleave", () => {
      isHover = false;
      cursorImg.src = "../icons/m1_50_g.png";

      clearInterval(rippleInterval);
    });
  });

  // click
  window.addEventListener("mousedown", (e) => {
    cursorImg.src = "../icons/m5_50_r.png";
    cursor.style.width = "35px";
    cursor.style.height = "35px";

    createClickRipple(e.clientX, e.clientY);
  });

  window.addEventListener("mouseup", () => {
    cursorImg.src = isHover ? "../icons/m1_50_r.png" : "../icons/m1_50_g.png";
    cursor.style.width = "50px";
    cursor.style.height = "50px";
  });
}

/* 모바일/태블릿 터치 ripple */
window.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];

  createClickRipple(touch.clientX, touch.clientY);
});
