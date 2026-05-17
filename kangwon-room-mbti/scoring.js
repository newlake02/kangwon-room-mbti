// =============================================
// 이 파일의 TYPE_INFO와 AXES는 나중에 교체 예정
// 유형 설명만 바꾸려면 TYPE_INFO의 nickname·description만 수정하세요
// 축 라벨을 바꾸려면 AXES의 leftLabel·rightLabel·axisName을 수정하세요
// =============================================

// 16가지 유형 정보 — 나중에 교체 예정
const TYPE_INFO = {
  ESTJ: {
    emoji: '🏫', nickname: '캠퍼스 최적화형', color: '#2bb5a0',
    description: '이 원룸은 강원대학교 대학가에서 가장 균형 잡힌 실속형 원룸입니다. 반경 5분 이내에 편의점, 카페, 식당, ATM이 밀집해 있어 생활 편의성이 뛰어나고, 유동인구가 많아 활기찬 분위기를 자랑합니다. 월세는 주변 시세 대비 저렴하고 기본 시설이 잘 갖춰져 있어 가성비가 좋습니다. 학교 정문까지 도보 5분 이내이고 버스정류장도 가까워 이동이 편리하며, CCTV와 가로등이 잘 정비되어 있어 야간에도 안전한 환경입니다. 실용성과 안전성 두 마리 토끼를 잡은 원룸입니다.'
  },
  ESTP: {
    emoji: '⚡', nickname: '가성비 활동러형', color: '#00b894',
    description: '번화가에 위치해 생활이 편리하면서도 주변 공간이 답답하지 않아 활동적인 생활을 즐기기 좋은 원룸입니다. 상권과 교통이 잘 갖춰져 있어 외출이 잦은 자취생에게 적합하며, 주변에 열린 공간과 자연환경이 있어 도심 속에서도 개방감을 느낄 수 있습니다. 월세가 부담스럽지 않고 기본 생활 시설이 충족되어 있어 실용적인 자취 생활이 가능합니다. 밖에서 활발하게 생활하는 것을 즐기는 자취생에게 잘 맞는 원룸입니다.'
  },
  ESFJ: {
    emoji: '🏡', nickname: '든든한 생활권형', color: '#0984e3',
    description: '편의시설이 풍부한 생활권에 위치하면서 실내 환경도 안락하고 안전성까지 갖춘 원룸입니다. 주변에 편의점, 카페, 여가시설이 가까이 있어 생활이 편리하고, 실내는 조명과 방음이 잘 되어 있어 집에서 쉬는 시간도 편안합니다. 가성비 있는 월세에 기본 시설이 충실하며, CCTV와 가로등 등 안전 인프라도 잘 갖춰져 있어 혼자 생활하는 자취생에게 든든한 환경을 제공합니다.'
  },
  ESFP: {
    emoji: '🎊', nickname: '놀고 쉬는 밸런스형', color: '#e84393',
    description: '번화가의 편리함을 누리면서 실내에서도 편안하게 쉴 수 있고 자연환경까지 가까운 균형 잡힌 원룸입니다. 상권과 여가시설이 가까워 활동적인 생활이 가능하고, 집 안은 아늑하고 쾌적한 분위기로 꾸며져 있습니다. 주변에 공원이나 녹지가 있어 도심 속에서도 자연을 가깝게 느낄 수 있습니다. 밖에서는 활기차게, 집에서는 편안하게 생활하고 싶은 자취생에게 이상적인 원룸입니다.'
  },
  ENTJ: {
    emoji: '🏆', nickname: '풀옵션 중심지형', color: '#e17055',
    description: '입지, 주거 품질, 교통 접근성, 안전성까지 모든 면에서 높은 수준을 갖춘 고스펙 원룸입니다. 번화가에 위치해 생활 편의성이 뛰어나고, 실내 시설은 최근 교체되거나 관리 상태가 우수합니다. 학교와 시내 모두 대중교통으로 접근이 편리하며, CCTV와 가로등, 보행로 정비 등 안전 인프라가 탄탄합니다. 자취 생활의 모든 조건을 갖추고 싶은 자취생에게 최적의 선택입니다.'
  },
  ENTP: {
    emoji: '🌆', nickname: '도심 속 힐링형', color: '#6c5ce7',
    description: '번화한 생활권에 위치해 있으면서도 주변이 답답하지 않고 개방감이 느껴지는 원룸입니다. 편의시설과 교통이 편리해 도심 생활을 충분히 누릴 수 있으며, 시설 품질도 우수해 쾌적한 주거 환경을 제공합니다. 창문에서 하늘이 잘 보이고 주변 공간이 열려 있어 도심 속에서도 숨통이 트이는 느낌을 받을 수 있습니다. 활발한 생활과 개방적인 환경을 동시에 원하는 자취생에게 잘 맞는 원룸입니다.'
  },
  ENFJ: {
    emoji: '⭐', nickname: '균형잡힌 만능형', color: '#fdcb6e',
    description: '편리함, 주거 품질, 실내 안락함, 안전성이 골고루 갖춰진 만능 원룸입니다. 상권과 교통이 편리하고 실내 시설도 깔끔하게 관리되어 있으며, 조명과 방음이 잘 되어 집에서의 생활도 쾌적합니다. CCTV, 가로등 등 안전 시설도 잘 정비되어 있어 야간에도 안심할 수 있습니다. 어느 한 가지가 특별히 뛰어나기보다 전반적으로 균형 잡힌 환경을 원하는 자취생에게 추천합니다.'
  },
  ENFP: {
    emoji: '🌿', nickname: '번화가 힐링형', color: '#00cec9',
    description: '번화가의 편리함을 누리면서 실내는 아늑하고 편안하며 주변 자연환경도 가까운 원룸입니다. 상권과 여가시설이 잘 갖춰진 위치에 있어 생활이 풍요롭고, 실내는 채광과 환기가 잘 되고 시설이 깔끔해 머무는 시간이 편안합니다. 공원이나 녹지도 가까워 일상 속에서 자연을 느낄 수 있습니다. 활기찬 외부 생활과 감성적인 실내 환경을 모두 원하는 자취생에게 잘 어울리는 원룸입니다.'
  },
  ISTJ: {
    emoji: '🔐', nickname: '조용한 실속형', color: '#74b9ff',
    description: '조용한 주거 골목에 위치해 있으면서 가성비와 안전성을 모두 갖춘 원룸입니다. 상권과 다소 거리가 있어 유동인구가 적고 소음이 거의 없어 공부나 휴식에 집중하기 좋은 환경입니다. 월세가 저렴하고 기본 생활 시설이 갖춰져 있어 실용적이며, 교통 접근성이 좋고 CCTV와 가로등이 잘 설치되어 있어 안전합니다. 조용하고 안전한 환경에서 실속 있게 자취 생활을 하고 싶은 학생에게 이상적입니다.'
  },
  ISTP: {
    emoji: '🎯', nickname: '숨은 올라운더형', color: '#55efc4',
    description: '조용하고 실속 있는 입지에 위치하면서 교통 동선과 개방감까지 갖춘 원룸입니다. 한적한 주거 골목에 있어 소음이 적고 사생활이 보장되며, 월세가 합리적이고 기본 시설이 충실합니다. 버스정류장과의 접근성이 좋아 이동이 편리하고, 주변 공간이 열려 있어 답답하지 않습니다. 조용한 환경과 실용적인 조건을 원하면서도 이동 편의성을 포기하고 싶지 않은 자취생에게 잘 맞습니다.'
  },
  ISFJ: {
    emoji: '🛡️', nickname: '나혼자도 안심형', color: '#a29bfe',
    description: '조용한 입지에 위치해 있고 월세 부담이 적으면서 실내가 편안하고 안전 시설이 잘 갖춰진 원룸입니다. 골목 안쪽에 자리 잡고 있어 사생활이 보장되고 소음이 적어 안정적인 생활이 가능합니다. 실내는 조명이 포근하고 전반적으로 아늑한 분위기이며, CCTV와 가로등이 설치되어 있어 혼자 사는 자취생도 안심할 수 있습니다. 혼자만의 조용하고 안전한 공간을 원하는 자취생에게 딱 맞는 원룸입니다.'
  },
  ISFP: {
    emoji: '🌸', nickname: '가성비 힐링형', color: '#fd79a8',
    description: '조용하고 저렴한 환경에서 아늑한 실내와 자연환경을 함께 누릴 수 있는 원룸입니다. 한적한 주거 골목에 위치해 소음이 적고 사생활이 잘 보장되며, 월세가 주변 시세보다 저렴해 경제적 부담이 적습니다. 실내는 포근하고 편안한 분위기이며, 주변에 공원이나 나무가 있어 일상에서 자연을 가깝게 느낄 수 있습니다. 조용하고 감성적인 자취 생활을 원하는 학생에게 추천하는 원룸입니다.'
  },
  INTJ: {
    emoji: '🏛️', nickname: '조용한 고스펙형', color: '#636e72',
    description: '조용한 주거 입지에 위치하면서 주거 품질, 교통 접근성, 안전성이 모두 높은 수준을 갖춘 원룸입니다. 유동인구가 적고 주변이 한산해 집중하기 좋은 환경이며, 실내 시설은 깔끔하게 관리되고 채광과 환기도 우수합니다. 버스 노선과 생활 인프라 접근성이 좋고 안전 시설도 잘 갖춰져 있어 불편함이 없습니다. 조용한 환경에서 높은 품질의 주거 생활을 원하는 자취생에게 최적입니다.'
  },
  INTP: {
    emoji: '🔭', nickname: '골목 속 오픈뷰형', color: '#0984e3',
    description: '조용한 골목에 위치하면서 주거 품질이 좋고 주변이 개방적인 느낌을 주는 원룸입니다. 상권과 거리가 있어 한산하고 소음이 적으며, 실내는 채광이 잘 되고 시설 관리가 우수합니다. 창문에서 하늘이 잘 보이고 주변에 열린 공간이 있어 답답하지 않으며, 공원이나 나무 등 자연환경도 가까이 있습니다. 조용하면서도 탁 트인 환경을 원하는 자취생에게 어울리는 원룸입니다.'
  },
  INFJ: {
    emoji: '🌙', nickname: '숙면 보장형', color: '#6c5ce7',
    description: '조용하고 쾌적한 환경에서 안락한 실내와 안전한 외부 환경을 모두 갖춘 원룸입니다. 골목 안쪽에 위치해 소음과 유동인구가 적어 집에서 온전히 쉴 수 있으며, 실내는 난방과 냉방이 잘 되고 방음도 우수합니다. CCTV와 가로등이 잘 설치되어 있어 밤에도 안심할 수 있고, 주변 환경이 깔끔하게 정비되어 있습니다. 하루 일과를 마치고 집에서 완전한 휴식을 취하고 싶은 자취생에게 이상적인 원룸입니다.'
  },
  INFP: {
    emoji: '🌾', nickname: '골목 힐링형', color: '#00b894',
    description: '조용한 주거 골목에 위치하면서 실내가 편안하고 주변에 자연환경이 가까운 감성적인 원룸입니다. 상권과 거리가 있어 한적하고 소음이 적으며, 실내는 아늑하고 불쾌한 냄새나 습기 없이 쾌적합니다. 주변에 공원이나 녹지, 나무가 있어 일상에서 자연의 여유를 느낄 수 있습니다. 조용하고 감성적인 공간에서 나만의 자취 생활을 꾸려나가고 싶은 학생에게 잘 어울리는 원룸입니다.'
  }
};

// 4개 축 정의 — 라벨·이름은 나중에 교체 예정
const AXES = [
  { left: 'E', right: 'I',
    leftLabel:  '번화가형',    rightLabel: '독립형',
    axisName:   '입지 에너지' },
  { left: 'S', right: 'N',
    leftLabel:  '가성비·실용형', rightLabel: '감성·품질형',
    axisName:   '주거 가치관' },
  { left: 'T', right: 'F',
    leftLabel:  '효율·교통형', rightLabel: '안락·감성형',
    axisName:   '선택 기준' },
  { left: 'J', right: 'P',
    leftLabel:  '체계·안전형', rightLabel: '개방·환경형',
    axisName:   '안전·환경 성격' }
];

/**
 * 답변 배열로 각 dimension 합계와 축별 퍼센트를 계산합니다.
 * @param {number[]} answers
 * @returns {{ raw: Object, axes: Object[] }}
 */
function getAxisScores(answers) {
  const raw = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  QUESTIONS.forEach((q, i) => { raw[q.dimension] += answers[i]; });

  const axes = AXES.map(({ left, right, leftLabel, rightLabel, axisName }) => {
    const total    = raw[left] + raw[right] || 1;
    const leftPct  = Math.round((raw[left]  / total) * 100);
    const rightPct = 100 - leftPct;
    const winner   = raw[left] >= raw[right] ? left : right;
    return { left, right, leftLabel, rightLabel, axisName, leftPct, rightPct, winner };
  });

  return { raw, axes };
}

/**
 * 답변 배열을 받아 4글자 MBTI 유형 문자열을 반환합니다.
 * @param {number[]} answers
 * @returns {string}  예: "ESTJ"
 */
function calculateType(answers) {
  const { raw } = getAxisScores(answers);
  return (raw.E >= raw.I ? 'E' : 'I')
       + (raw.S >= raw.N ? 'S' : 'N')
       + (raw.T >= raw.F ? 'T' : 'F')
       + (raw.J >= raw.P ? 'J' : 'P');
}

/**
 * Firestore에 저장된 raw scores({ E,I,S,N,T,F,J,P })로 축 데이터를 계산합니다.
 * questions.js 없이도 동작 (AXES만 참조)
 * @param {Object} scores  { E:number, I:number, ... }
 * @returns {Object[]}  axes 배열
 */
function getAxisFromScores(scores) {
  return AXES.map(({ left, right, leftLabel, rightLabel, axisName }) => {
    const lv    = scores[left]  || 0;
    const rv    = scores[right] || 0;
    const total = lv + rv || 1;
    const leftPct  = Math.round((lv / total) * 100);
    const rightPct = 100 - leftPct;
    const winner   = lv >= rv ? left : right;
    return { left, right, leftLabel, rightLabel, axisName, leftPct, rightPct, winner };
  });
}

/**
 * 여러 응답의 scores 평균으로 축 데이터를 계산합니다. (search 페이지용)
 * @param {Object[]} responses  Firestore 응답 문서 배열
 * @returns {Object[]}  axes 배열
 */
function getAvgAxisFromResponses(responses) {
  const dims = ['E','I','S','N','T','F','J','P'];
  const sums = {};
  dims.forEach(d => { sums[d] = 0; });
  let n = 0;
  responses.forEach(r => {
    if (!r.scores) return;
    dims.forEach(d => { sums[d] += (r.scores[d] || 0); });
    n++;
  });
  if (n === 0) return getAxisFromScores(sums);
  const avg = {};
  dims.forEach(d => { avg[d] = sums[d] / n; });
  return getAxisFromScores(avg);
}
