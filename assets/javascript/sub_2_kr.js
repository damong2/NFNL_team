// security_classification
const categoryData = {
  지역: {
    서울: [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ],

    경기: [
      "가평군",
      "고양시",
      "과천시",
      "광명시",
      "광주시",
      "구리시",
      "군포시",
      "김포시",
      "남양주시",
      "동두천시",
      "부천시",
      "성남시",
      "수원시",
      "시흥시",
      "안산시",
      "안성시",
      "안양시",
      "양주시",
      "양평군",
      "여주시",
      "연천군",
      "오산시",
      "용인시",
      "의왕시",
      "의정부시",
      "이천시",
      "인천",
      "파주시",
      "평택시",
      "포천시",
      "하남시",
      "화성시",
    ],

    강원: [
      "강릉시",
      "고성군",
      "동해시",
      "삼척시",
      "속초시",
      "양구군",
      "양양군",
      "영월군",
      "원주시",
      "인제군",
      "정선군",
      "철원군",
      "춘천시",
      "태백시",
      "평창군",
      "홍천군",
      "화천군",
      "횡성군",
    ],

    충남: [
      "계룡시",
      "공주시",
      "금산군",
      "논산시",
      "당진시",
      "대전",
      "보령시",
      "부여군",
      "서산시",
      "서천군",
      "세종",
      "아산시",
      "예산군",
      "천안시",
      "청양군",
      "태안군",
      "홍성군",
    ],

    충북: [
      "괴산군",
      "단양군",
      "보은군",
      "영동군",
      "옥천군",
      "음성군",
      "제천시",
      "진천군",
      "청주시",
      "충주시",
      "증평군",
    ],

    경남: [
      "거제시",
      "거창군",
      "고성군",
      "김해시",
      "남해군",
      "대구",
      "밀양시",
      "부산",
      "사천시",
      "산청군",
      "양산시",
      "울산",
      "의령군",
      "진주시",
      "창녕군",
      "창원시",
      "통영시",
      "하동군",
      "함안군",
      "함양군",
      "합천군",
    ],

    경북: [
      "경산시",
      "경주시",
      "고령군",
      "구미시",
      "김천시",
      "문경시",
      "봉화군",
      "상주시",
      "성주군",
      "안동시",
      "영덕군",
      "영양군",
      "영주시",
      "영천시",
      "예천군",
      "울릉군",
      "울진군",
      "의성군",
      "청도군",
      "청송군",
      "칠곡군",
      "포항시",
    ],

    전남: [
      "강진군",
      "고흥군",
      "곡성군",
      "광주",
      "광양시",
      "구례군",
      "나주시",
      "담양군",
      "목포시",
      "무안군",
      "보성군",
      "순천시",
      "신안군",
      "여수시",
      "영광군",
      "영암군",
      "완도군",
      "장성군",
      "장흥군",
      "진도군",
      "함평군",
      "해남군",
      "화순군",
    ],

    전북: [
      "고창군",
      "군산시",
      "김제시",
      "남원시",
      "무주군",
      "부안군",
      "순창군",
      "완주군",
      "익산시",
      "임실군",
      "장수군",
      "전주시",
      "정읍시",
      "진안군",
    ],

    제주: ["서귀포시", "제주시"],
  },
  음식: {
    한식: [
      "갈비찜",
      "곰탕",
      "김치찌개",
      "낙지볶음",
      "냉면",
      "닭갈비",
      "닭볶음탕",
      "도가니탕",
      "돌솥밥",
      "된장찌개",
      "미역국",
      "백반",
      "보쌈",
      "부대찌개",
      "불고기",
      "비빔밥",
      "삼계탕",
      "순두부찌개",
      "아구찜",
      "오징어볶음",
      "육개장",
      "잔치국수",
      "잡채",
      "제육볶음",
      "족발",
      "철판볶음밥",
      "청국장",
      "칼국수",
      "콩국수",
      "해물파전",
      "해장국",
      "기타",
    ],

    중식: [
      "고추잡채",
      "깐풍기",
      "꿔바로우",
      "마라롱샤",
      "마라샹궈",
      "마라탕",
      "마파두부밥",
      "볶음밥",
      "양장피",
      "우육면",
      "유산슬",
      "잡채밥",
      "짜장면",
      "짬뽕",
      "탄탄면",
      "탕수육",
      "팔보채",
      "기타",
    ],

    양식: [
      "감바스",
      "그라탕",
      "뇨끼",
      "아란치니",
      "토마토리조 ",
      "크림리소토",
      "오일리소토",
      "로제리소토",
      "바비큐",
      "스테이크",
      "뽀모도로",
      "까르보나라",
      "크림파스타",
      "오일파스타",
      "로제파스타",
      "빠네파스타",
      "빠쉐파스타",
      "감자스프",
      "양송이스프",
      "양파스프",
      "고르곤졸라",
      "마르게리타",
      "페퍼로니",
      "하와이안",
      "햄버거",
      "피쉬앤칩스",
      "기타",
    ],

    일식: [
      "가츠동",
      "냉모밀",
      "돈카츠",
      "돈코츠라멘",
      "모듬초밥",
      "사시미",
      "스키야키",
      "야끼소바",
      "야키니쿠",
      "오코노미",
      "온센타마고",
      "카이센동",
      "타코야키",
      "텐동",
      "후토마끼",
      "기타",
    ],

    아시아: [
      "나시고랭",
      "난",
      "똠양꿍",
      "랭쌥",
      "미고랭",
      "분짜",
      "쌀국수",
      "월남쌈",
      "짜조",
      "치킨커리",
      "카오팟",
      "팟타이",
      "푸팟퐁커리",
      "고로케",
      "박소",
      "사떼",
      "소또아얌",
      "기타",
    ],

    뷔페: ["과일시즌", "디저트섹션", "샐러드바", "신선코너", "즉석로스트", "초콜릿퐁듀", "핫플레이트", "기타"],

    카페: [
      "ABC주스",
      "과일스무디",
      "과일주스",
      "까눌레",
      "두바이초코",
      "디카페인",
      "라떼",
      "아이스티",
      "에이드",
      "말차라떼",
      "바닐라라떼",
      "버터모찌",
      "베이글",
      "샌드위치",
      "스콘",
      "아메리카노",
      "와플",
      "자몽에이드",
      "조각케이크",
      "쿠키",
      "크로플",
      "티라미스",
      "홀케이크",
      "기타",
    ],

    분식: [
      "돈까스김밥",
      "떡볶이",
      "라면",
      "라볶이",
      "모듬튀김",
      "비빔만두",
      "샐러드김밥",
      "스팸김밥",
      "야채김밥",
      "어묵탕",
      "오므라이스",
      "쫄면",
      "찰순대",
      "참치김밥",
      "콩국수",
      "온소바",
      "냉소바",
      "유부우동",
      "튀김우동",
      "떡만두국",
      "등심돈까스",
      "치즈돈까스",
      "치즈김밥",
      "와사비김밥",
      "돈까스롤",
      "통새우롤",
      "김치김밥",
      "멸추김밥",
      "기타",
    ],

    주점: [
      "가라아게",
      "감바스",
      "감자튀김",
      "골뱅이소면",
      "과메기",
      "과일",
      "나쵸",
      "마른안주",
      "먹태",
      "모듬소시지",
      "어묵탕",
      "오마카세",
      "조개탕",
      "쥐포",
      "치킨",
      "피자",
      "기타",
    ],

    기타: [
      "글루텐프리",
      "다이어트",
      "반려견",
      "비건",
      "유아식",
      "저염",
      "저탄고지",
      "콜키지",
      "브랜드관",
      "프랜차이즈",
      "기타",
    ],
  },
  상세: {
    시설: [
      "1인석",
      "놀이방",
      "단체석",
      "대관가능",
      "대기공간",
      "레터링",
      "루프탑",
      "룸",
      "무선인터넷",
      "바테이블",
      "동물동반",
      "발렛파킹",
      "산책로",
      "스포츠관람",
      "연인석",
      "유아의자",
      "음악감상",
      "입식",
      "자동결제",
      "소물리에",
      "좌식",
      "주차",
      "카운터석",
      "콜키지프리",
      "콜키지유료",
      "테라스",
      "포토존",
      "화장실공용",
      "화장실구분",
      "휠체어출입",
    ],

    분위기: [
      "편한좌석",
      "혼밥",
      "혼술",
      "분위기좋은",
      "대화",
      "노포",
      "모던한",
      "힙한",
      "이국적인",
      "전통적인",
      "트렌디한",
      "1980",
      "조용한",
    ],

    테마: [
      "사진맛집",
      "넓은",
      "신선한",
      "새로오픈",
      "뷰맛집",
      "주류페어링",
      "현지쉐프",
      "맵부심",
      "특별한메뉴",
      "다양한술",
      "혼밥혼술",
      "이달의명당",
      "무한리필",
      "인테리어",
      "달달이",
      "반려견메뉴",
      "이색적인",
      "비건",
      "아침뷔페",
      "점심뷔페",
      "저녁뷔페",
      "다이어트",
      "글루텐프리",
    ],

    목적: [
      "가족모임",
      "기념일",
      "노키즈존",
      "데이트",
      "미팅",
      "상견례",
      "소개팅",
      "스몰웨딩",
      "애견동반",
      "웰컴키즈존",
      "팝업스토어",
      "프로포즈",
      "한강",
      "회식",
    ],

    예약: ["대기예약", "실시간예약", "예약혜택", "쿠폰", "pay결제", "포장주문"],

    속성: ["포장", "배달", "예약"],

    영업시간: ["24시영업", "영업중", "주중", "주말", "오전", "오후", "저녁", "새벽"],

    정렬: ["요즘뜨는", "많이찾는", "재방문높은", "TV에나온", "가격대", "가까운", "별점순", "리뷰많은순"],

    별점: ["5", "4.5", "4", "3.5", "3", "2.5", "2", "1.5", "1", "0.5"],

    기타: ["브랜드관", "프랜차이즈", "웨이팅", "오마카세", "최저가", "핫플레이스", "미쉐린", "인기급상승"],
  },
};

// 현재 선택된 메인 탭
let currentMainTab = "지역";

//메인 탭 클릭시 동작
function changeMainTab(sideTabName, element) {
  currentMainTab = sideTabName;

  //탭 스타일 변경
  document.querySelectorAll(".st_item").forEach((el) => el.classList.remove("active"));
  element.classList.add("active");

  //중분류 메뉴 새로고침
  renderMidCategories();
}

//중분류 렌더링
function renderMidCategories() {
  const midMenu = document.getElementById("mid_menu");
  midMenu.innerHTML = "";

  const midCategories = Object.keys(categoryData[currentMainTab]);

  midCategories.forEach((name, index) => {
    const div = document.createElement("div");
    div.className = "mid_item" + (index === 0 ? " active" : "");
    div.innerText = name;
    div.onclick = () => selectMidCategory(name, div);
    midMenu.appendChild(div);
  });

  //첫번째 중분류 자동 선택
  selectMidCategory(midCategories[0], midMenu.firstChild);
}

//소분류
function selectMidCategory(midName, element) {
  const smallMenu = document.getElementById("small_menu");
  smallMenu.innerHTML = "";

  //중분류 텍스트 강조
  document.querySelectorAll(".mid_item").forEach((el) => el.classList.remove("active"));
  element.classList.add("active");

  //소분류 리스트 생성
  const items = categoryData[currentMainTab][midName];
  items.forEach((text) => {
    const div = document.createElement("div");
    div.className = "sub_item";
    div.innerText = text;

    div.onclick = () => {
      div.classList.toggle("active");
    };

    div.onclick = () => {
      document.querySelectorAll(".sub_item").forEach((el) => el.classList.remove("active"));
      div.classList.add("active");
    };
    smallMenu.appendChild(div);
  });
}

const mainCategory = document.querySelectorAll(".st_item");
const midCategory = document.querySelectorAll(".mid_item");
const smCategory = document.querySelectorAll(".sub_item");

//중분류 선택한것만 반응
mainCategory.forEach((menu, index) => {
  menu.addEventListener("click", (event) => {
    event.preventDefault();

    mainCategory.forEach((item) => {
      item.classList.remove("active");
    });
    menu.classList.add("active");

    midCategory.forEach((cont) => {
      cont.style.display = "none";
    });
    // 모두 숨기기
    midCategory[index].style.display = "inline-block";
    // 클릭되면 연결된 부분만 반응
  });
});

//소분류 선택한것만 반응
midCategory.forEach((menu, index) => {
  menu.addEventListener("click", (event) => {
    event.preventDefault();

    midCategory.forEach((item) => {
      item.classList.remove("active");
    });
    menu.classList.add("active");

    smCategory.forEach((cont) => {
      cont.style.display = "none";
    });
    smCategory[index].style.display = "inline-block";
  });
});

//초기 실행
window.onload = () => {
  // 1. 메인탭을 음식으로 변경
  currentMainTab = "음식";

  // 왼쪽 탭 active 처리
  document.querySelectorAll(".st_item").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".st_item").forEach((el) => {
    if (el.innerText === "음식") el.classList.add("active");
  });

  // 2. 중분류 렌더링
  renderMidCategories();

  // 3. 한식 선택
  const midItems = document.querySelectorAll(".mid_item");
  midItems.forEach((el) => {
    if (el.innerText === "한식") {
      el.click(); // 기존 함수 재사용
    }
  });

  // 4. 족발 선택
  setTimeout(() => {
    const subItems = document.querySelectorAll(".sub_item");
    subItems.forEach((el) => {
      if (el.innerText === "족발") {
        el.click();
      }
    });
  }, 0);
};

// pagination
const currentPage = location.pathname.split("b")[1].split(".")[0];

document.querySelectorAll(".pu").forEach((li) => {
  const page = li.innerText;
  if (page === currentPage) {
    li.classList.add("active");
  }
});
