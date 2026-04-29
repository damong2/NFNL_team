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

// click particle
function createExplosion(x, y) {
  const colors = ["#ff0000", "#ff0844", "#f83600"];

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // 크기 (작/중/대)
    const sizeType = Math.random();
    let size;
    if (sizeType < 0.33) size = 4;
    else if (sizeType < 0.66) size = 8;
    else size = 14;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    // 색상 랜덤
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = color;
    particle.style.boxShadow = `0 0 6px ${color}, 0 0 12px ${color}`;

    // 방향 + 중력 느낌
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 60 + 30;

    let moveX = Math.cos(angle) * distance;
    let moveY = Math.sin(angle) * distance;

    // 중력 (아래로 더 떨어지게)
    moveY += 60 + Math.random() * 40;

    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.setProperty("--x", moveX + "px");
    particle.style.setProperty("--y", moveY + "px");

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 600);
  }
}

// click
window.addEventListener("mousedown", (e) => {
  cursorImg.src = "../icons/m5_50_r.png";
  cursor.style.width = "35px";
  cursor.style.height = "35px";
  createClickRipple(e.clientX, e.clientY);
  createExplosion(e.clientX, e.clientY);
});

window.addEventListener("mouseup", () => {
  // cursorImg.src = isHover ? "../icons/m1_50_g.png" : "../icons/m1_50_r.png";
  cursorImg.src = isHover ? "../icons/m1_50_r.png" : "../icons/m1_50_g.png";
  cursor.style.width = "50px";
  cursor.style.height = "50px";
});
