const questions = [
  { q: "정부는 시장 경제에 최대한 개입하지 않아야 한다.", dim: "economic" },
  { q: "복지를 늘리기 위한 세금 인상은 정당하다.", dim: "welfare" },
  { q: "사회는 다양한 성적 정체성을 존중해야 한다.", dim: "diversity" },
  { q: "안보를 위해 일부 자유는 제한될 수 있다.", dim: "security" },
  { q: "전통적 질서는 사회 안정을 위해 중요하다.", dim: "order" },
  { q: "불평등 해소를 위해 정부의 적극 개입이 필요하다.", dim: "economic" },
  { q: "군사력 증강은 평화를 위한 필수 수단이다.", dim: "security" },
  { q: "다양성을 법으로 강제하는 것은 부작용이 있다.", dim: "diversity" },
  { q: "복지보다는 개인의 책임이 더 중요하다.", dim: "welfare" },
  { q: "오랜 전통이라도 비효율적이면 폐기되어야 한다.", dim: "order" },
  { q: "정부는 최저임금제를 폐지해야 한다.", dim: "economic" },
  { q: "국가는 기본소득을 도입해야 한다.", dim: "welfare" },
  { q: "성별에 따른 직업 선택은 자유로워야 한다.", dim: "diversity" },
  { q: "사생활보다 국가 안보가 우선이다.", dim: "security" },
  { q: "가족의 전통적 형태를 지키는 것이 중요하다.", dim: "order" },
  { q: "자유무역은 국내 산업 보호보다 우선이다.", dim: "economic" },
  { q: "국가는 무상의료를 보장해야 한다.", dim: "welfare" },
  { q: "퀴어 퍼레이드는 자유로운 표현이다.", dim: "diversity" },
  { q: "테러 위협 시 표현의 자유는 제한될 수 있다.", dim: "security" },
  { q: "국기에 대한 예절은 반드시 지켜야 한다.", dim: "order" },
  { q: "법인세는 낮춰야 한다.", dim: "economic" },
  { q: "무상급식은 정부의 의무다.", dim: "welfare" },
  { q: "국가는 모든 소수자를 적극적으로 보호해야 한다.", dim: "diversity" },
  { q: "징병제는 안보를 위한 최소한의 의무다.", dim: "security" },
  { q: "전통 명절은 문화 정체성에 꼭 필요하다.", dim: "order" },
  { q: "공기업은 민영화되어야 한다.", dim: "economic" },
  { q: "국가는 사회 취약계층을 우선 지원해야 한다.", dim: "welfare" },
  { q: "모든 종교는 동등하게 존중받아야 한다.", dim: "diversity" },
  { q: "정권안정을 위해 언론통제도 가능하다.", dim: "security" },
  { q: "가족 내 위계질서는 유지되어야 한다.", dim: "order" },
  { q: "시장에선 실패한 기업도 자연도태되어야 한다.", dim: "economic" },
  { q: "국가는 공공임대주택을 대폭 확충해야 한다.", dim: "welfare" },
  { q: "성 정체성은 개인의 문제다.", dim: "diversity" },
  { q: "정부는 국가기밀 보호를 위해 감청할 수 있다.", dim: "security" },
  { q: "전통 의례는 국가적 차원에서 장려해야 한다.", dim: "order" },
  { q: "규제를 줄이는 것이 경제를 살리는 길이다.", dim: "economic" },
  { q: "장애인과 고령자 복지에 더 많은 예산이 필요하다.", dim: "welfare" },
  { q: "이민자는 사회의 다양성을 강화한다.", dim: "diversity" },
  { q: "전시 상황에선 표현의 자유를 제한해야 한다.", dim: "security" },
  { q: "전통은 시대 흐름에 맞게 변화되어야 한다.", dim: "order" }
];

let currentIndex = 0;
let scores = { economic: [], welfare: [], diversity: [], security: [], order: [] };

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const progressBar = document.getElementById("progress-bar");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function renderQuestion() {
  const q = questions[currentIndex];
  questionText.textContent = `(${currentIndex + 1}/${questions.length}) ` + q.q;
  optionsContainer.innerHTML = "";

  const choices = [
    { text: "매우 동의", value: 5 },
    { text: "동의", value: 4 },
    { text: "중립", value: 3 },
    { text: "비동의", value: 2 },
    { text: "매우 비동의", value: 1 }
  ];

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      scores[q.dim][currentIndex] = choice.value;
      next();
    };
    optionsContainer.appendChild(btn);
  });

  progressBar.style.width = `${(currentIndex / questions.length) * 100}%`;
}

function next() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    const result = {};
    for (const key in scores) {
      const arr = scores[key].filter(Boolean);
      result[key] = (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2);
    }
    const params = new URLSearchParams(result).toString();
    window.location.href = `result.html?${params}`;
  }
}

prevBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
};

nextBtn.onclick = () => {
  next();
};

renderQuestion();
