const topBtn = document.querySelector("#topBtn");

// 스크롤 시 버튼 표시
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// 클릭 시 맨 위로 이동 (부드럽게)
topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
