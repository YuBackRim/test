// axisScores 초기화
const axisScores = {
  economy: 0,   // 경제관 (좌파–우파)
  society: 0,   // 사회관 (보수–진보)
  authority: 0, // 권위관 (자유–통제)
  global: 0     // 국제관 (민족주의–세계주의)
};

// axisMap 배열 (질문 40개와 각 축 대응 여부, 방향 포함)
const axisMap = [
  { axis: 'economy', reverse: false },  // Q1
  { axis: 'economy', reverse: true },   // Q2
  { axis: 'economy', reverse: false },  // Q3
  { axis: 'economy', reverse: true },   // Q4
  { axis: 'economy', reverse: false },  // Q5
  { axis: 'economy', reverse: true },   // Q6
  { axis: 'economy', reverse: false },  // Q7
  { axis: 'economy', reverse: true },   // Q8

  { axis: 'society', reverse: false },  // Q9
  { axis: 'society', reverse: true },   // Q10
  { axis: 'society', reverse: false },  // Q11
  { axis: 'society', reverse: true },   // Q12
  { axis: 'society', reverse: false },  // Q13
  { axis: 'society', reverse: true },   // Q14
  { axis: 'society', reverse: false },  // Q15
  { axis: 'society', reverse: true },   // Q16

  { axis: 'authority', reverse: false }, // Q17
  { axis: 'authority', reverse: true },  // Q18
  { axis: 'authority', reverse: false }, // Q19
  { axis: 'authority', reverse: true },  // Q20
  { axis: 'authority', reverse: false }, // Q21
  { axis: 'authority', reverse: true },  // Q22
  { axis: 'authority', reverse: false }, // Q23
  { axis: 'authority', reverse: true },  // Q24

  { axis: 'global', reverse: false },    // Q25
  { axis: 'global', reverse: true },     // Q26
  { axis: 'global', reverse: false },    // Q27
  { axis: 'global', reverse: true },     // Q28
  { axis: 'global', reverse: false },    // Q29
  { axis: 'global', reverse: true },     // Q30
  { axis: 'global', reverse: false },    // Q31
  { axis: 'global', reverse: true },     // Q32

  { axis: 'economy', reverse: false },   // Q33
  { axis: 'society', reverse: false },   // Q34
  { axis: 'authority', reverse: false }, // Q35
  { axis: 'global', reverse: false },    // Q36
  { axis: 'economy', reverse: true },    // Q37
  { axis: 'society', reverse: true },    // Q38
  { axis: 'authority', reverse: true },  // Q39
  { axis: 'global', reverse: true },     // Q40
];

// 점수 계산 함수
function calculateScores(answers) {
  const result = {
    economy: 0,
    society: 0,
    authority: 0,
    global: 0,
  };

  for (let i = 0; i < answers.length; i++) {
    const { axis, reverse } = axisMap[i];
    const score = reverse ? (6 - answers[i]) : answers[i]; // 1~5 범위
    result[axis] += score;
  }

  return result;
}
