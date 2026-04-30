// mouse effect
const cursor = document.getElementById("cursor");
const cursorImg = document.getElementById("cursorImg");
const targets = document.querySelectorAll(".hover-target");

let isHover = false;
let rippleInterval = null;
let mouseX = 0;
let mouseY = 0;

// 마우스 위치 추적
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});

// 다중 여러 요소 hover
targets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    isHover = true;
    // cursorImg.src = "../icons/m1_50_g.png";
    cursorImg.src = "../icons/m1_50_r.png";

    // 일정 간격으로 ripple 생성
    rippleInterval = setInterval(() => {
      createRipple(mouseX, mouseY);
    }, 700);
  });

  // hover 종료
  el.addEventListener("mouseleave", () => {
    isHover = false;
    cursorImg.src = "../icons/m1_50_g.png";

    // cursorImg.src = "../icons/m1_50_r.png";
    clearInterval(rippleInterval);
  });
});

// ripple
function createRipple(x, y) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  document.body.appendChild(ripple);
  // 번지는 속도 조절
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

// click
window.addEventListener("mousedown", (e) => {
  cursorImg.src = "../icons/m5_50_r.png";
  cursor.style.width = "35px";
  cursor.style.height = "35px";
  createClickRipple(e.clientX, e.clientY);
  // createExplosion(e.clientX, e.clientY);
});

window.addEventListener("mouseup", () => {
  // cursorImg.src = isHover ? "../icons/m1_50_g.png" : "../icons/m1_50_r.png";
  cursorImg.src = isHover ? "../icons/m1_50_r.png" : "../icons/m1_50_g.png";
  cursor.style.width = "50px";
  cursor.style.height = "50px";
});
