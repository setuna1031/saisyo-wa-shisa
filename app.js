const state = {
  minutes: "5",
  place: "road",
  mood: "good",
  focus: "dribble",
  otherSpace: "small",
  otherCrowd: "few",
  otherKick: "none",
  otherLift: "no",
};

const logState = {
  fun: "たのしい",
  tired: "げんき",
  done: "ボールにたくさんさわれた",
  next: "顔を上げる",
};

const mimicState = {
  watch: "足",
  result: "できた",
  notice: "ゆっくりならできた",
  next: "足だけ",
};

const quizState = {
  category: "position",
  categoryLabel: "ポジション",
  questions: [],
  index: 0,
  score: 0,
  answered: false,
};

const offsideState = {
  index: 0,
  answered: false,
  lineVisible: false,
  timeouts: [],
};

const timerState = {
  steps: [],
  index: 0,
  remaining: 0,
  running: false,
  intervalId: null,
  warned: false,
  finished: false,
  audioContext: null,
};

const selectedLogIds = new Set();
let pendingDelete = null;

const labels = {
  place: {
    road: "家の前",
    horiko: "ほりこう",
    school: "学校",
    other: "その他",
  },
  mood: {
    good: "やる気",
    normal: "ふつう",
    tired: "つかれた",
  },
  focus: {
    dribble: "ドリブル",
    instep: "インステップ",
    light: "軽め",
    mix: "おまかせ",
  },
};

const todayLabel = document.querySelector("#todayLabel");
const planResult = document.querySelector("#planResult");
const videoResult = document.querySelector("#videoResult");
const logList = document.querySelector("#logList");
const logHint = document.querySelector("#logHint");
const otherPlacePanel = document.querySelector("#otherPlacePanel");
const timerPanel = document.querySelector("#timerPanel");
const timerCard = document.querySelector("#timerCard");
const timerStepCount = document.querySelector("#timerStepCount");
const timerStatus = document.querySelector("#timerStatus");
const timerStepName = document.querySelector("#timerStepName");
const timerDisplay = document.querySelector("#timerDisplay");
const timerStepPoint = document.querySelector("#timerStepPoint");
const logManageHint = document.querySelector("#logManageHint");
const logConfirm = document.querySelector("#logConfirm");
const logConfirmText = document.querySelector("#logConfirmText");
const todayStatus = document.querySelector("#todayStatus");
const weekCount = document.querySelector("#weekCount");
const dailyMessage = document.querySelector("#dailyMessage");
const quizPanel = document.querySelector("#quizPanel");
const quizProgress = document.querySelector("#quizProgress");
const quizQuestionCount = document.querySelector("#quizQuestionCount");
const quizQuestionText = document.querySelector("#quizQuestionText");
const quizChoices = document.querySelector("#quizChoices");
const quizFeedback = document.querySelector("#quizFeedback");
const nextQuizButton = document.querySelector("#nextQuiz");
const saveQuizLogButton = document.querySelector("#saveQuizLog");
const offsideBoard = document.querySelector("#offsideBoard");
const offsideJudgeTag = document.querySelector("#offsideJudgeTag");
const offsideLine = document.querySelector("#offsideLine");
const offsideStep = document.querySelector("#offsideStep");
const offsideQuestion = document.querySelector("#offsideQuestion");
const offsideFeedback = document.querySelector("#offsideFeedback");
const offsideAnswerOff = document.querySelector("#offsideAnswerOff");
const offsideAnswerSafe = document.querySelector("#offsideAnswerSafe");
const offsideLineToggle = document.querySelector("#offsideLineToggle");
const playOffsideButton = document.querySelector("#playOffside");
const resetOffsideButton = document.querySelector("#resetOffside");
const nextOffsideButton = document.querySelector("#nextOffside");
const offsideQuizCount = document.querySelector("#offsideQuizCount");

const offsideScenes = [
  {
    tag: "オフサイド",
    safe: false,
    lineX: 72,
    passer: { x: 37, y: 68 },
    receiver: { x: 83, y: 32 },
    ballMid: { x: 58, y: 46 },
    keeper: { x: 94, y: 50 },
    defenders: [{ x: 72, y: 58 }, { x: 62, y: 29 }, { x: 55, y: 78 }],
    question: "パスの瞬間、受ける子が2人目の相手より前で待っている。これは？",
    title: "前で待っている",
    copy: "相手ゴールに近い方から2人目より前にいるので、オフサイドになりやすい。",
    note: "キーパーだけではなく、相手を全部見て2人目を探すよ。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 72,
    passer: { x: 36, y: 66 },
    receiver: { x: 64, y: 34 },
    ballMid: { x: 51, y: 42 },
    keeper: { x: 94, y: 50 },
    defenders: [{ x: 72, y: 58 }, { x: 60, y: 16 }, { x: 55, y: 78 }],
    question: "パスの瞬間、受ける子が2人目の相手より後ろにいる。これは？",
    title: "後ろから走り出す",
    copy: "パスの瞬間にラインより後ろなら、前へ走って受けてもセーフ。",
    note: "前で待つより、パスが出てから走ると分かりやすいね。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 70,
    passer: { x: 32, y: 66 },
    receiver: { x: 45, y: 34 },
    ballMid: { x: 40, y: 48 },
    keeper: { x: 94, y: 50 },
    defenders: [{ x: 70, y: 58 }, { x: 62, y: 24 }, { x: 55, y: 76 }],
    question: "受ける子が自分の陣地にいる。これは？",
    title: "自分の陣地",
    copy: "自分の陣地にいる時は、相手より前でもオフサイドにならない。",
    note: "まず半分の線を見る。自分側ならセーフと覚えよう。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 70,
    passer: { x: 74, y: 68 },
    receiver: { x: 62, y: 34 },
    ballMid: { x: 67, y: 48 },
    keeper: { x: 94, y: 50 },
    defenders: [{ x: 70, y: 58 }, { x: 58, y: 16 }, { x: 55, y: 78 }],
    question: "受ける子がボールより後ろにいる。これは？",
    title: "ボールより後ろ",
    copy: "ボールより後ろで受ける時は、相手ラインより前に見えてもセーフ。",
    note: "オフサイドは相手だけでなく、ボールの場所も見るよ。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 72,
    passer: { x: 35, y: 10 },
    receiver: { x: 82, y: 34 },
    ballMid: { x: 62, y: 18 },
    keeper: { x: 94, y: 50 },
    defenders: [{ x: 72, y: 58 }, { x: 62, y: 25 }, { x: 55, y: 78 }],
    question: "スローインから直接受けた。これは？",
    title: "スローイン",
    copy: "スローインから直接受ける時は、前にいてもオフサイドはない。",
    note: "例外は少しずつでOK。まずスローインはセーフと覚えよう。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 72,
    passer: { x: 24, y: 77 },
    receiver: { x: 82, y: 33 },
    ballMid: { x: 52, y: 84 },
    keeper: { x: 94, y: 50 },
    defenders: [{ x: 72, y: 58 }, { x: 61, y: 25 }, { x: 55, y: 76 }],
    question: "コーナーキックから直接受けた。これは？",
    title: "コーナーキック",
    copy: "コーナーキックから直接受ける時も、オフサイドはない。",
    note: "スローイン、ゴールキック、コーナーキックは直接ならセーフ。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 72,
    passer: { x: 20, y: 52 },
    receiver: { x: 80, y: 34 },
    ballMid: { x: 50, y: 18 },
    keeper: { x: 94, y: 50 },
    defenders: [{ x: 72, y: 58 }, { x: 61, y: 25 }, { x: 55, y: 76 }],
    question: "ゴールキックから直接受けた。これは？",
    title: "ゴールキック",
    copy: "ゴールキックから直接受ける時は、前にいてもオフサイドはない。",
    note: "ルールの例外。試合で見たら「あ、これはセーフ」と思い出そう。",
  },
  {
    tag: "オフサイド",
    safe: false,
    lineX: 84,
    passer: { x: 39, y: 66 },
    receiver: { x: 90, y: 33 },
    ballMid: { x: 61, y: 44 },
    keeper: { x: 64, y: 50 },
    defenders: [{ x: 94, y: 42 }, { x: 84, y: 62 }, { x: 58, y: 76 }],
    question: "GKが前に出ていて、後ろに守備が2人いる。受ける子はその2人目より前。これは？",
    title: "GKが前に出た場面",
    copy: "GKが前にいても、相手をゴールに近い方から数えて2人目がラインになる。",
    note: "GKが最後とは限らない。相手全員を数えるのが大事。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 84,
    passer: { x: 39, y: 66 },
    receiver: { x: 78, y: 34 },
    ballMid: { x: 58, y: 45 },
    keeper: { x: 64, y: 50 },
    defenders: [{ x: 94, y: 42 }, { x: 84, y: 62 }, { x: 58, y: 76 }],
    question: "GKが前に出ていて、後ろの守備2人目より後ろから受ける。これは？",
    title: "GKが前でも後ろならOK",
    copy: "2人目の相手より後ろにいるのでセーフ。",
    note: "GKの場所より、ゴールに近い相手を2人見る。",
  },
  {
    tag: "オフサイド",
    safe: false,
    lineX: 66,
    passer: { x: 36, y: 66 },
    receiver: { x: 78, y: 35 },
    ballMid: { x: 56, y: 45 },
    keeper: { x: 66, y: 52 },
    defenders: [{ x: 94, y: 44 }, { x: 60, y: 24 }, { x: 55, y: 76 }],
    question: "ゴール前に守備が1人、GKが2人目になっている。受ける子はGKより前。これは？",
    title: "2人目がGKになることもある",
    copy: "GKが前に出て、GKが2人目の相手になる場面もある。",
    note: "名前ではなく場所で数える。2人目より前ならオフサイドになりやすい。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 66,
    passer: { x: 36, y: 66 },
    receiver: { x: 60, y: 34 },
    ballMid: { x: 49, y: 45 },
    keeper: { x: 66, y: 52 },
    defenders: [{ x: 94, y: 44 }, { x: 58, y: 16 }, { x: 55, y: 76 }],
    question: "GKが2人目の相手。受ける子はGKより後ろにいる。これは？",
    title: "2人目より後ろ",
    copy: "2人目の相手より後ろにいるのでセーフ。",
    note: "GKが前に出た時こそ、2人目を落ち着いて探そう。",
  },
  {
    tag: "オフサイド",
    safe: false,
    lineX: 75,
    passer: { x: 42, y: 74 },
    receiver: { x: 86, y: 25 },
    ballMid: { x: 62, y: 38 },
    keeper: { x: 95, y: 50 },
    defenders: [{ x: 75, y: 58 }, { x: 62, y: 17 }, { x: 58, y: 80 }],
    question: "味方が横にパス。受ける子が2人目の相手より前で待つ。これは？",
    title: "横パスでも位置を見る",
    copy: "パスの向きより、パスの瞬間の場所を見る。",
    note: "前にけったかどうかだけでは決まらないよ。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 75,
    passer: { x: 84, y: 68 },
    receiver: { x: 70, y: 30 },
    ballMid: { x: 77, y: 45 },
    keeper: { x: 95, y: 50 },
    defenders: [{ x: 75, y: 58 }, { x: 66, y: 32 }, { x: 58, y: 80 }],
    question: "味方が後ろにパス。受ける子はボールより後ろ。これは？",
    title: "後ろへのパス",
    copy: "ボールより後ろで受けるのでセーフ。",
    note: "相手ゴールに近すぎる場所で待っているかを見よう。",
  },
  {
    tag: "オフサイド",
    safe: false,
    lineX: 68,
    passer: { x: 34, y: 64 },
    receiver: { x: 80, y: 72 },
    ballMid: { x: 55, y: 80 },
    keeper: { x: 94, y: 50 },
    defenders: [{ x: 68, y: 43 }, { x: 60, y: 22 }, { x: 56, y: 80 }],
    question: "受ける子が下の広い場所で、2人目の相手より前。これは？",
    title: "広い場所で待っている",
    copy: "守備から離れていても、2人目より前ならオフサイドになりやすい。",
    note: "近くに守備がいるかではなく、ラインより前かを見る。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 68,
    passer: { x: 34, y: 64 },
    receiver: { x: 66, y: 72 },
    ballMid: { x: 50, y: 84 },
    keeper: { x: 94, y: 50 },
    defenders: [{ x: 68, y: 43 }, { x: 60, y: 22 }, { x: 56, y: 80 }],
    question: "受ける子が2人目の相手とほぼ同じ高さ。これは？",
    title: "同じ高さ",
    copy: "2人目の相手と同じ高さならセーフ。",
    note: "前に出すぎていなければOK。",
  },
  {
    tag: "オフサイド",
    safe: false,
    lineX: 73,
    passer: { x: 41, y: 36 },
    receiver: { x: 85, y: 62 },
    ballMid: { x: 62, y: 52 },
    keeper: { x: 95, y: 50 },
    defenders: [{ x: 73, y: 36 }, { x: 64, y: 22 }, { x: 56, y: 78 }],
    question: "パスが出た瞬間は前にいて、そのあと戻って受けた。これは？",
    title: "戻って受けても瞬間を見る",
    copy: "判定はパスが出た瞬間の場所で見る。",
    note: "あとから戻っても、最初に前で待っていたらオフサイドになりやすい。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 73,
    passer: { x: 41, y: 36 },
    receiver: { x: 63, y: 62 },
    ballMid: { x: 53, y: 50 },
    keeper: { x: 95, y: 50 },
    defenders: [{ x: 73, y: 36 }, { x: 64, y: 22 }, { x: 56, y: 78 }],
    question: "パスの瞬間は後ろ、そのあと前へ走った。これは？",
    title: "走り出しはセーフ",
    copy: "パスの瞬間にラインより後ろなら、前へ走って受けてもセーフ。",
    note: "いい飛び出しは、パスが出てから走る動きだね。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 71,
    passer: { x: 30, y: 32 },
    receiver: { x: 49, y: 70 },
    ballMid: { x: 41, y: 52 },
    keeper: { x: 94, y: 50 },
    defenders: [{ x: 71, y: 42 }, { x: 61, y: 20 }, { x: 58, y: 84 }],
    question: "相手陣地に入る前、自分の陣地から受ける。これは？",
    title: "自分の陣地から受ける",
    copy: "自分の陣地にいる時はオフサイドにならない。",
    note: "半分の線より自分側ならセーフ。",
  },
  {
    tag: "オフサイド",
    safe: false,
    lineX: 77,
    passer: { x: 43, y: 70 },
    receiver: { x: 88, y: 48 },
    ballMid: { x: 64, y: 58 },
    keeper: { x: 96, y: 50 },
    defenders: [{ x: 77, y: 32 }, { x: 70, y: 66 }, { x: 56, y: 82 }],
    question: "受ける子がゴールに近い場所で待ち、2人目の相手より前。これは？",
    title: "ゴール前で待つ",
    copy: "2人目の相手よりゴールに近いので、オフサイドになりやすい。",
    note: "「相手2人より前で待たない」を合言葉にしよう。",
  },
  {
    tag: "セーフ",
    safe: true,
    lineX: 77,
    passer: { x: 43, y: 70 },
    receiver: { x: 76, y: 48 },
    ballMid: { x: 60, y: 58 },
    keeper: { x: 96, y: 50 },
    defenders: [{ x: 77, y: 32 }, { x: 70, y: 66 }, { x: 56, y: 82 }],
    question: "受ける子が2人目の相手と同じくらいの場所から出る。これは？",
    title: "同じくらいならOK",
    copy: "2人目の相手より前に出ていなければセーフ。",
    note: "ぴったり同じ高さはセーフ。大事なのは前に出すぎないこと。",
  },
];

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getWeekStart(date) {
  const copy = new Date(date);
  const day = copy.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  copy.setHours(0, 0, 0, 0);
  copy.setDate(copy.getDate() + diff);
  return copy;
}

function formatToday() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = ["日", "月", "火", "水", "木", "金", "土"][now.getDay()];
  return `${month}/${date} ${day}`;
}

function setupTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.dataset.tab;
      document.querySelectorAll(".tab-button").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.toggle("active", screen.id === `screen-${tab}`);
      });
      if (tab === "logs") renderLogs();
    });
  });
}

function setupChoices() {
  document.querySelectorAll(".segmented[data-group]").forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest(".choice");
      if (!button) return;
      const key = group.dataset.group;
      state[key] = button.dataset.value;
      group.querySelectorAll(".choice").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      if (key === "place") updateOtherPanel();
      saveSettings();
    });
  });

  document.querySelectorAll(".segmented[data-log]").forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest(".choice");
      if (!button) return;
      const key = group.dataset.log;
      logState[key] = button.dataset.value;
      group.querySelectorAll(".choice").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
    });
  });

  document.querySelectorAll(".segmented[data-mimic]").forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest(".choice");
      if (!button) return;
      const key = group.dataset.mimic;
      mimicState[key] = button.dataset.value;
      group.querySelectorAll(".choice").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
    });
  });

  document.querySelector("[data-quiz-category]").addEventListener("click", (event) => {
    const button = event.target.closest(".choice");
    if (!button) return;
    quizState.category = button.dataset.value;
    quizState.categoryLabel = button.textContent.trim();
    event.currentTarget.querySelectorAll(".choice").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
  });

}

function saveSettings() {
  localStorage.setItem("soccerSettings", JSON.stringify(state));
}

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem("soccerSettings") || "{}");
    Object.keys(state).forEach((key) => {
      if (saved[key]) state[key] = saved[key];
    });
  } catch {}
}

function applySettingsToUI() {
  Object.entries(state).forEach(([key, value]) => {
    const group = document.querySelector(`.segmented[data-group="${key}"]`);
    if (!group) return;
    group.querySelectorAll(".choice").forEach((button) => {
      button.classList.toggle("active", button.dataset.value === value);
    });
  });
}

function updateOtherPanel() {
  otherPlacePanel.hidden = state.place !== "other";
}

function getPlaceName() {
  if (state.place !== "other") return labels.place[state.place];
  const input = document.querySelector("#otherPlaceName").value.trim();
  return input || "その他";
}

function getPlaceRules() {
  if (state.place === "road") {
    return {
      name: "家の前",
      shortPass: true,
      lightKick: false,
      lift: false,
      wide: false,
      safety: "強いキックと大きく転がる練習はなし。短いパスまで。",
    };
  }

  if (state.place === "horiko") {
    return {
      name: "ほりこう",
      shortPass: true,
      lightKick: true,
      lift: true,
      wide: true,
      safety: "人が多い時はキックとリフティングを控えめにする。",
    };
  }

  if (state.place === "school") {
    return {
      name: "学校",
      shortPass: true,
      lightKick: true,
      lift: true,
      wide: true,
      safety: "学校の利用ルールを優先する。使える範囲だけで行う。",
    };
  }

  const crowdMany = state.otherCrowd === "many";
  const shortPass = !crowdMany && (state.otherKick === "pass" || state.otherKick === "light");
  const lightKick = !crowdMany && state.otherKick === "light";
  const lift = !crowdMany && state.otherLift === "yes" && state.otherSpace !== "small";

  return {
    name: getPlaceName(),
    shortPass,
    lightKick,
    lift,
    wide: state.otherSpace === "wide" && !crowdMany,
    safety: crowdMany
      ? "人が多いので、キックとリフティングはなし。足元の練習だけ。"
      : "入力した場所のルールを優先して、できる範囲で行う。",
  };
}

function distributeMinutes(total) {
  const minutes = Number(total);
  if (minutes <= 5) return [1, 2, 1, 1];
  if (minutes <= 8) return [1, 3, 2, 2];
  if (minutes <= 10) return [2, 3, 3, 2];
  return [3, 6, 7, 4];
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const next = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[next]] = [copy[next], copy[index]];
  }
  return copy;
}

function exercisePools(rules) {
  const warmups = [
    {
      title: "足うらコロコロ",
      body: "右足、左足でボールを前後にやさしく転がす。",
      point: "ボールを遠くへ逃がさない。",
    },
    {
      title: "からだを起こす",
      body: "軽く歩く、スキップ、足うらタッチで始める。",
      point: "息が上がりすぎない強さにする。",
    },
  ];

  const dribble = [
    {
      title: "小さくドリブル",
      body: "細かくタッチして、目印まで運んで戻る。",
      point: "ボールが足から離れすぎなければ成功。",
    },
    {
      title: "方向チェンジ",
      body: "目印を2つ置いて、右と左へ曲がる。",
      point: "顔を一瞬だけ上げられたらよい。",
    },
  ];

  const pass = [
    {
      title: "短いパス",
      body: "親と1から2メートルで、止めてからやさしく返す。",
      point: "強く蹴らず、相手に届けば成功。",
    },
    {
      title: "ドリブルから短いパス",
      body: "ドリブルを2回して止まり、親へやさしくパスする。",
      point: "運ぶ、止める、蹴るをつなげる。",
    },
  ];

  const instepShape = [
    {
      title: "インステップの形",
      body: "つま先を下げて、足の甲をかたくする。ボールは強く蹴らない。",
      point: "合言葉は「つま先した、足のこうカチッ」。",
    },
    {
      title: "足の甲に当てる",
      body: "止まったボールに足の甲をそっと当てるだけ。",
      point: "飛ばさなくてOK。形ができたら成功。",
    },
  ];

  const instepKick = [
    {
      title: "インステップ短距離",
      body: "足の甲に当てて、1から2メートルだけ軽く転がす。",
      point: "強さより、足首の形を優先する。",
    },
    {
      title: "ドリブルから軽くキック",
      body: "ドリブルを2回して、近い目印へ軽く転がす。",
      point: "大きく蹴らず、足の甲に当てる。",
    },
  ];

  const lifting = [
    {
      title: "ワンバウンドリフティング",
      body: "1回蹴って、落として、また1回。連続を狙わない。",
      point: "足の甲の真ん中に当てる。",
    },
    {
      title: "1回リフティングしてキャッチ",
      body: "足の甲で1回だけ上げて、手でキャッチする。",
      point: "高く上げすぎなくてよい。",
    },
  ];

  const finish = [
    {
      title: "好きなプレーで終わる",
      body: "好きなフェイントやドリブルを1つ選ぶ。",
      point: "いい感じで終われたら十分。",
    },
    {
      title: "今日の成功をもう1回",
      body: "今日いちばんできた動きを1回だけやる。",
      point: "できた感覚で終わる。",
    },
  ];

  return {
    warmups,
    dribble,
    pass: rules.shortPass ? pass : [],
    instep: rules.lightKick ? instepKick : instepShape,
    lift: rules.lift ? lifting : [],
    finish,
  };
}

function makeRandomSteps(times, rules) {
  const pools = exercisePools(rules);
  const middle = [...pools.dribble, ...pools.instep, ...pools.pass, ...pools.lift];
  const firstMain = pick(middle.length ? middle : pools.dribble);
  const secondPool = middle.filter((item) => item.title !== firstMain.title);
  const secondMain = pick(secondPool.length ? secondPool : middle);

  return [
    { time: `${times[0]}分`, ...pick(pools.warmups) },
    { time: `${times[1]}分`, ...firstMain },
    { time: `${times[2]}分`, ...secondMain },
    { time: `${times[3]}分`, ...pick(pools.finish) },
  ];
}

function makeFocusedSteps(times, rules) {
  const pools = exercisePools(rules);
  const tired = state.mood === "tired";
  const focus = tired ? "light" : state.focus;

  if (focus === "mix") return makeRandomSteps(times, rules);

  const steps = [{ time: `${times[0]}分`, ...pick(pools.warmups) }];

  if (focus === "instep") {
    steps.push({ time: `${times[1]}分`, ...pick(pools.dribble) });
    steps.push({ time: `${times[2]}分`, ...pick(pools.instep) });
  } else if (focus === "light") {
    steps.push({
      time: `${times[1]}分`,
      title: "足うらと小さなタッチ",
      body: "右足、左足でやさしく触る。速くしなくてよい。",
      point: "疲れていたら途中で終わってOK。",
    });
    steps.push({ time: `${times[2]}分`, ...pick(pools.instep) });
  } else {
    steps.push({ time: `${times[1]}分`, ...pick(pools.dribble) });
    steps.push({
      time: `${times[2]}分`,
      ...(rules.shortPass ? pick(pools.pass) : pick(pools.instep)),
    });
  }

  steps.push({ time: `${times[3]}分`, ...pick(pools.finish) });
  return steps;
}

function makeSteps(rules) {
  return makeFocusedSteps(distributeMinutes(state.minutes), rules);
}

function getPlanTitle(rules) {
  if (state.mood === "tired") return "軽く触って終わる";
  if (state.focus === "mix") return `${rules.name}でおまかせ`;
  if (state.focus === "instep") return "インステップ: 足の甲に当てる";
  if (state.focus === "light") return "軽めに確認";
  return "ドリブルから始める";
}

function renderPlan() {
  const hasPain = document.querySelector("#painCheck").checked;
  if (hasPain) {
    resetTimer([]);
    planResult.innerHTML = `
      <div class="plan-title">
        <strong>今日は休む日</strong>
        <span class="tag">安全優先</span>
      </div>
      <ul class="step-list">
        <li>
          <span class="time-box">0分</span>
          <span class="step-copy">
            <strong>練習は止める</strong>
            <span>痛み、めまい、気持ち悪さがある日は無理をしない。</span>
          </span>
        </li>
        <li>
          <span class="time-box">3分</span>
          <span class="step-copy">
            <strong>見るだけメニュー</strong>
            <span>好きなプレーを1つ見て、「次にやりたいこと」を話す。</span>
          </span>
        </li>
      </ul>
      <ul class="note-list">
        <li>強い痛みや長引く痛みがある時は、保護者・指導者・専門家に相談する。</li>
        <li>子どもへの声かけ: 「今日はからだを大事にする日だね」</li>
      </ul>
    `;
    return;
  }

  const rules = getPlaceRules();
  const steps = makeSteps(rules);
  resetTimer(steps);

  planResult.innerHTML = `
    <div class="plan-title">
      <strong>${escapeHtml(getPlanTitle(rules))}</strong>
      <span class="tag">${state.minutes}分 ${escapeHtml(rules.name)}</span>
    </div>
    <ul class="step-list">
      ${steps
        .map(
          (step) => `
            <li>
              <span class="time-box">${step.time}</span>
              <span class="step-copy">
                <strong>${escapeHtml(step.title)}</strong>
                <span>${escapeHtml(step.body)}</span>
                <span>${escapeHtml(step.point)}</span>
              </span>
            </li>
          `,
        )
        .join("")}
    </ul>
    <ul class="note-list">
      <li>場所ルール: ${escapeHtml(rules.safety)}</li>
      <li>練習前: 「今日は1つできたら成功にしよう」</li>
      <li>うまくいかない時: 「強くじゃなくて、形だけでいいよ」</li>
      <li>練習後: 「最後までボールを触れたのがよかったね」</li>
    </ul>
  `;
}

function parseStepSeconds(step) {
  const minutes = Number.parseInt(step.time, 10);
  return Number.isFinite(minutes) ? minutes * 60 : 0;
}

function resetTimer(steps = timerState.steps) {
  stopTimer();
  timerState.steps = steps;
  timerState.index = 0;
  timerState.remaining = steps[0] ? parseStepSeconds(steps[0]) : 0;
  timerState.warned = false;
  timerState.finished = false;
  timerPanel.hidden = steps.length === 0;
  renderTimer();
}

function stopTimer() {
  timerState.running = false;
  if (timerState.intervalId) {
    clearInterval(timerState.intervalId);
    timerState.intervalId = null;
  }
}

function renderTimer() {
  const step = timerState.steps[timerState.index];
  if (!step) {
    timerPanel.hidden = true;
    return;
  }

  timerPanel.hidden = false;
  timerStepCount.textContent = `${timerState.index + 1}/${timerState.steps.length}`;
  timerStepName.textContent = step.title;
  timerStepPoint.textContent = step.point;
  timerDisplay.textContent = formatSeconds(timerState.remaining);

  timerCard.classList.toggle("warning", timerState.remaining <= 10 && timerState.remaining > 0);
  timerCard.classList.toggle("done", timerState.finished);

  if (timerState.finished) {
    timerStatus.textContent = "おしまい。次へを押してね";
  } else if (timerState.running) {
    timerStatus.textContent = "いまやること";
  } else {
    timerStatus.textContent = "スタートを押してね";
  }
}

function formatSeconds(totalSeconds) {
  const safeSeconds = Math.max(0, totalSeconds);
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function ensureAudio() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  if (!timerState.audioContext) timerState.audioContext = new AudioCtor();
  if (timerState.audioContext.state === "suspended") {
    timerState.audioContext.resume().catch(() => {});
  }
  return timerState.audioContext;
}

function beep(frequency = 880, duration = 0.12, delay = 0, volume = 0.55, type = "sine") {
  const audioContext = ensureAudio();
  if (!audioContext) return;
  const startAt = audioContext.currentTime + delay;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.03);
}

function playWarningSound() {
  beep(880, 0.12, 0, 0.62, "triangle");
  beep(880, 0.12, 0.18, 0.62, "triangle");
}

function playDoneSound() {
  beep(660, 0.16, 0, 0.65, "triangle");
  beep(880, 0.16, 0.18, 0.65, "triangle");
  beep(1040, 0.22, 0.36, 0.68, "triangle");
}

function playCorrectSound() {
  beep(784, 0.11, 0, 0.58, "triangle");
  beep(1046, 0.16, 0.13, 0.62, "triangle");
}

function playWrongSound() {
  beep(220, 0.24, 0, 0.58, "sawtooth");
}

function startTimer() {
  if (!timerState.steps.length || timerState.running) return;
  ensureAudio();
  if (timerState.remaining <= 0) {
    timerState.remaining = parseStepSeconds(timerState.steps[timerState.index]);
  }
  timerState.running = true;
  timerState.finished = false;
  renderTimer();
  timerState.intervalId = setInterval(() => {
    timerState.remaining -= 1;
    if (timerState.remaining === 10 && !timerState.warned) {
      timerState.warned = true;
      playWarningSound();
    }
    if (timerState.remaining <= 0) {
      timerState.remaining = 0;
      timerState.finished = true;
      stopTimer();
      playDoneSound();
    }
    renderTimer();
  }, 1000);
}

function pauseTimer() {
  stopTimer();
  renderTimer();
}

function nextTimerStep() {
  stopTimer();
  if (!timerState.steps.length) return;
  timerState.index = Math.min(timerState.index + 1, timerState.steps.length - 1);
  timerState.remaining = parseStepSeconds(timerState.steps[timerState.index]);
  timerState.warned = false;
  timerState.finished = false;
  renderTimer();
}

function getLogs() {
  try {
    return JSON.parse(localStorage.getItem("soccerLogs") || "[]");
  } catch {
    return [];
  }
}

function saveLogs(logs) {
  localStorage.setItem("soccerLogs", JSON.stringify(logs));
  updateDailyStats();
}

function saveLog() {
  const logs = getLogs();
  const rules = getPlaceRules();
  const log = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    type: "practice",
    savedAt: new Date().toISOString(),
    dayKey: todayKey(),
    date: formatToday(),
    minutes: state.minutes,
    place: rules.name,
    mood: labels.mood[state.mood],
    focus: labels.focus[state.focus],
    fun: logState.fun,
    tired: logState.tired,
    done: logState.done,
    next: logState.next,
    memo: document.querySelector("#memoInput").value.trim(),
  };
  logs.unshift(log);
  saveLogs(logs.slice(0, 30));
  logHint.textContent = "今日も1つ積み上げた！";
  dailyMessage.textContent = "今日も1つ積み上げた！";
  setTimeout(() => {
    logHint.textContent = "未保存";
  }, 1800);
}

function saveMimicLog() {
  const logs = getLogs();
  const move = document.querySelector("#mimicMove").value.trim() || "今日の動き";
  const log = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    type: "mimic",
    savedAt: new Date().toISOString(),
    dayKey: todayKey(),
    date: formatToday(),
    move,
    watch: mimicState.watch,
    result: mimicState.result,
    notice: mimicState.notice,
    next: mimicState.next,
    memo: document.querySelector("#mimicMemo").value.trim(),
  };
  logs.unshift(log);
  saveLogs(logs.slice(0, 30));
  dailyMessage.textContent = "まねもログに残した！";
}

function saveQuizLog() {
  const logs = getLogs();
  const log = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    type: "quiz",
    savedAt: new Date().toISOString(),
    dayKey: todayKey(),
    date: formatToday(),
    category: quizState.categoryLabel,
    score: quizState.score,
    total: quizState.questions.length,
    memo: `${quizState.categoryLabel} ${quizState.score}/${quizState.questions.length}`,
  };
  logs.unshift(log);
  saveLogs(logs.slice(0, 30));
  dailyMessage.textContent = "クイズもログに残した！";
  saveQuizLogButton.hidden = true;
}

function updateDailyStats() {
  const logs = getLogs();
  const today = todayKey();
  const todayCount = logs.filter((log) => getLogDayKey(log) === today).length;
  todayStatus.textContent = todayCount ? `${todayCount}回` : "まだ";

  const start = getWeekStart(new Date());
  const weekly = logs.filter((log) => {
    const date = getLogDate(log);
    return date && date >= start;
  }).length;
  weekCount.textContent = `${weekly}回`;
}

function getLogDayKey(log) {
  if (log.dayKey) return log.dayKey;
  const date = getLogDate(log);
  return date ? date.toISOString().slice(0, 10) : "";
}

function getLogDate(log) {
  if (log.savedAt) {
    const date = new Date(log.savedAt);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  return null;
}

function renderLogs() {
  const logs = getLogs();
  selectedLogIds.clear();
  updateLogManageHint();
  if (!logs.length) {
    logList.innerHTML = `<div class="empty-state">まだログはありません</div>`;
    return;
  }

  logList.innerHTML = logs
    .map(
      (log) => `
        <article class="log-card">
          <input type="checkbox" class="log-check" data-id="${escapeHtml(log.id)}" aria-label="ログを選択">
          <div class="log-card-content">
            ${renderLogContent(log)}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderLogContent(log) {
  const type = log.type || "practice";
  if (type === "mimic") {
    return `
      <strong><span class="log-tag mimic">まね</span> ${escapeHtml(log.date)} ${escapeHtml(log.move)}</strong>
      <p>見たところ: ${escapeHtml(log.watch)} / 結果: ${escapeHtml(log.result)}</p>
      <p>気づき: ${escapeHtml(log.notice)}</p>
      <p>次にまねすること: ${escapeHtml(log.next)}</p>
      ${log.memo ? `<p>メモ: ${escapeHtml(log.memo)}</p>` : ""}
    `;
  }

  if (type === "quiz") {
    return `
      <strong><span class="log-tag quiz">クイズ</span> ${escapeHtml(log.date)} ${escapeHtml(log.category)}</strong>
      <p>結果: ${escapeHtml(log.score)}/${escapeHtml(log.total)}問</p>
      ${log.memo ? `<p>メモ: ${escapeHtml(log.memo)}</p>` : ""}
    `;
  }

  return `
    <strong><span class="log-tag practice">練習</span> ${escapeHtml(log.date)} ${escapeHtml(log.minutes)}分 ${escapeHtml(log.place)}</strong>
    <p>気分: ${escapeHtml(log.mood)} / テーマ: ${escapeHtml(log.focus)}</p>
    <p>楽しさ: ${escapeHtml(log.fun)} / 疲れ: ${escapeHtml(log.tired)}</p>
    <p>できたこと: ${escapeHtml(log.done)}</p>
    <p>次に試すこと: ${escapeHtml(log.next)}</p>
    ${log.memo ? `<p>メモ: ${escapeHtml(log.memo)}</p>` : ""}
  `;
}

function updateLogManageHint(message) {
  if (message) {
    logManageHint.textContent = message;
    return;
  }
  const count = selectedLogIds.size;
  logManageHint.textContent = count ? `${count}件選択` : "選択なし";
}

function showDeleteConfirm(type) {
  const logs = getLogs();
  if (type === "selected" && selectedLogIds.size === 0) {
    updateLogManageHint("選んでね");
    return;
  }
  if (!logs.length) {
    updateLogManageHint("ログなし");
    return;
  }

  pendingDelete = type;
  logConfirm.hidden = false;
  logConfirmText.textContent =
    type === "all"
      ? "ログを全部消しますか？"
      : `選んだ${selectedLogIds.size}件のログを消しますか？`;
}

function cancelDelete() {
  pendingDelete = null;
  logConfirm.hidden = true;
}

function confirmDelete() {
  const logs = getLogs();
  if (pendingDelete === "all") {
    saveLogs([]);
  } else if (pendingDelete === "selected") {
    saveLogs(logs.filter((log) => !selectedLogIds.has(log.id)));
  }
  pendingDelete = null;
  logConfirm.hidden = true;
  renderLogs();
}

function exportLogsCsv() {
  const logs = getLogs();
  if (!logs.length) {
    updateLogManageHint("ログなし");
    return;
  }

  const headers = [
    "種類",
    "日付",
    "時間",
    "場所",
    "気分",
    "テーマ",
    "楽しさ",
    "疲れ",
    "できたこと",
    "次に試すこと",
    "まねした動き",
    "見たところ",
    "結果",
    "気づき",
    "クイズカテゴリ",
    "クイズ点数",
    "クイズ問題数",
    "メモ",
  ];
  const rows = logs.map((log) => [
    logTypeLabel(log),
    log.date,
    log.minutes ? `${log.minutes}分` : "",
    log.place || "",
    log.mood || "",
    log.focus || "",
    log.fun || "",
    log.tired || "",
    log.done || "",
    log.next || "",
    log.move || "",
    log.watch || "",
    log.result || "",
    log.notice || "",
    log.category || "",
    log.score ?? "",
    log.total ?? "",
    log.memo || "",
  ]);
  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `soccer-log-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  updateLogManageHint("CSV作成");
}

function logTypeLabel(log) {
  const type = log.type || "practice";
  if (type === "mimic") return "まね";
  if (type === "quiz") return "クイズ";
  return "練習";
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return map[char];
  });
}

function renderVideoMemo() {
  const move = document.querySelector("#mimicMove").value.trim() || "今日の動き";
  videoResult.innerHTML = `
    <div class="plan-title">
      <strong>${escapeHtml(move)}</strong>
      <span class="tag">分解メモ</span>
    </div>
    <ul class="step-list">
      <li>
        <span class="time-box">足</span>
        <span class="step-copy">
          <strong>どちらの足で、どこに当てるか</strong>
          <span>まず足だけまねする。速さは気にしない。</span>
        </span>
      </li>
      <li>
        <span class="time-box">体</span>
        <span class="step-copy">
          <strong>体の向きとバランスを見る</strong>
          <span>前を向くのか、横を向くのかを1つだけ確認する。</span>
        </span>
      </li>
      <li>
        <span class="time-box">球</span>
        <span class="step-copy">
          <strong>ボールの近さを見る</strong>
          <span>足から離れすぎないか、止まっているか動いているかを見る。</span>
        </span>
      </li>
    </ul>
    <ul class="note-list">
      <li>今日見るところ: ${escapeHtml(mimicState.watch)}</li>
      <li>声かけ: 「今日は1つだけまねしてみよう」</li>
      <li>声かけ: 「動画みたいに全部できなくて大丈夫」</li>
    </ul>
  `;
}

function renderOffsideScene() {
  const scene = currentOffsideScene();
  clearOffsideTimers();
  offsideState.answered = false;
  offsideBoard.classList.remove("playing");
  offsideBoard.classList.toggle("safe-scene", scene.safe);
  offsideBoard.classList.toggle("offside-scene", !scene.safe);
  offsideBoard.style.setProperty("--line-x", `${scene.lineX}%`);
  offsideBoard.style.setProperty("--passer-x", `${scene.passer.x}%`);
  offsideBoard.style.setProperty("--passer-y", `${scene.passer.y}%`);
  offsideBoard.style.setProperty("--receiver-x", `${scene.receiver.x}%`);
  offsideBoard.style.setProperty("--receiver-y", `${scene.receiver.y}%`);
  offsideBoard.style.setProperty("--ball-mid-x", `${scene.ballMid.x}%`);
  offsideBoard.style.setProperty("--ball-mid-y", `${scene.ballMid.y}%`);
  scene.defenders.forEach((defender, index) => {
    const number = index + 1;
    offsideBoard.style.setProperty(`--defender-${number}-x`, `${defender.x}%`);
    offsideBoard.style.setProperty(`--defender-${number}-y`, `${defender.y}%`);
  });
  offsideBoard.style.setProperty("--keeper-x", `${scene.keeper.x}%`);
  offsideBoard.style.setProperty("--keeper-y", `${scene.keeper.y}%`);
  offsideLine.querySelector("span").textContent = "2人目の相手";
  offsideJudgeTag.textContent = "考えてみよう";
  offsideQuestion.textContent = scene.question;
  offsideQuizCount.textContent = `全${offsideScenes.length}問`;
  offsideStep.innerHTML = `
    <strong>これはどっち？</strong>
    <p>まずは答えを選ぼう。ラインはあとでONにして確認できるよ。</p>
  `;
  setOffsideLineVisible(false);
  playOffsideButton.disabled = true;
  resetOffsideButton.disabled = true;
  nextOffsideButton.disabled = true;
  resetOffsideAnswers();
}

function playOffsideScene() {
  if (!offsideState.answered) return;
  const scene = currentOffsideScene();
  clearOffsideTimers();
  offsideBoard.classList.remove("playing");
  offsideBoard.offsetHeight;
  offsideBoard.classList.add("playing");
  offsideStep.innerHTML = `
    <strong>1. ボールをける瞬間</strong>
    <p>ここで受ける子の場所をチェックする。</p>
  `;
  offsideState.timeouts.push(
    setTimeout(() => {
      offsideStep.innerHTML = `
        <strong>2. ラインとくらべる</strong>
        <p>${escapeHtml(scene.copy)}</p>
      `;
    }, 900),
  );
  offsideState.timeouts.push(
    setTimeout(() => {
      offsideStep.innerHTML = `
        <strong>3. 判定は${escapeHtml(scene.tag)}</strong>
        <p>${escapeHtml(scene.note)}</p>
      `;
    }, 1800),
  );
}

function answerOffsideQuiz(answer) {
  if (offsideState.answered) return;
  const scene = currentOffsideScene();
  const correct = answer === (scene.safe ? "safe" : "offside");
  offsideState.answered = true;
  if (correct) {
    playCorrectSound();
  } else {
    playWrongSound();
  }

  offsideAnswerOff.disabled = true;
  offsideAnswerSafe.disabled = true;
  offsideAnswerOff.classList.toggle("correct", !scene.safe);
  offsideAnswerSafe.classList.toggle("correct", scene.safe);
  if (!correct) {
    (answer === "offside" ? offsideAnswerOff : offsideAnswerSafe).classList.add("wrong");
  }

  offsideFeedback.hidden = false;
  offsideFeedback.innerHTML = `
    <strong>${correct ? "正解！" : "おしい！"}</strong>
    <p>${escapeHtml(scene.note)}</p>
  `;
  offsideJudgeTag.textContent = scene.tag;
  offsideStep.innerHTML = `
    <strong>${escapeHtml(scene.title)}: ${escapeHtml(scene.tag)}</strong>
    <p>${escapeHtml(scene.copy)}</p>
  `;
  setOffsideLineVisible(true);
  playOffsideButton.disabled = false;
  resetOffsideButton.disabled = false;
  nextOffsideButton.disabled = false;
}

function resetOffsideAnswers() {
  [offsideAnswerOff, offsideAnswerSafe].forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "wrong");
  });
  offsideFeedback.hidden = true;
  offsideFeedback.innerHTML = "";
}

function clearOffsideTimers() {
  offsideState.timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
  offsideState.timeouts = [];
}

function currentOffsideScene() {
  return offsideScenes[offsideState.index];
}

function setOffsideLineVisible(visible) {
  offsideState.lineVisible = visible;
  offsideLineToggle.checked = visible;
  offsideBoard.classList.toggle("show-line", visible);
}

function nextOffsideQuestion() {
  const currentIndex = offsideState.index;
  if (offsideScenes.length <= 1) {
    renderOffsideScene();
    return;
  }
  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * offsideScenes.length);
  }
  offsideState.index = nextIndex;
  renderOffsideScene();
}

function startQuiz() {
  const pool = QUIZ_QUESTIONS.filter((question) => question.category === quizState.category);
  quizState.questions = shuffle(pool).slice(0, 5);
  quizState.index = 0;
  quizState.score = 0;
  quizState.answered = false;
  quizPanel.hidden = false;
  saveQuizLogButton.hidden = true;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const question = quizState.questions[quizState.index];
  if (!question) {
    renderQuizResult();
    return;
  }

  quizState.answered = false;
  quizProgress.textContent = `${quizState.score}/${quizState.questions.length}`;
  quizQuestionCount.textContent = `${quizState.index + 1}/${quizState.questions.length}`;
  quizQuestionText.textContent = question.question;
  quizFeedback.hidden = true;
  nextQuizButton.hidden = true;
  saveQuizLogButton.hidden = true;
  quizChoices.innerHTML = question.choices
    .map(
      (choice, index) => `
        <button class="quiz-choice" type="button" data-index="${index}">
          ${escapeHtml(choice)}
        </button>
      `,
    )
    .join("");
}

function answerQuiz(choiceIndex) {
  if (quizState.answered) return;
  const question = quizState.questions[quizState.index];
  const correct = choiceIndex === question.answerIndex;
  quizState.answered = true;
  if (correct) quizState.score += 1;
  if (correct) {
    playCorrectSound();
  } else {
    playWrongSound();
  }

  quizChoices.querySelectorAll(".quiz-choice").forEach((button) => {
    const index = Number(button.dataset.index);
    button.disabled = true;
    if (index === question.answerIndex) button.classList.add("correct");
    if (index === choiceIndex && !correct) button.classList.add("wrong");
  });

  quizFeedback.hidden = false;
  quizFeedback.innerHTML = `
    <strong>${correct ? "正解！" : "おしい！"}</strong>
    <p>${escapeHtml(question.note)}</p>
  `;
  quizProgress.textContent = `${quizState.score}/${quizState.questions.length}`;

  if (quizState.index === quizState.questions.length - 1) {
    nextQuizButton.hidden = true;
    saveQuizLogButton.hidden = false;
  } else {
    nextQuizButton.hidden = false;
  }
}

function nextQuiz() {
  quizState.index += 1;
  renderQuizQuestion();
}

function renderQuizResult() {
  quizQuestionCount.textContent = "おしまい";
  quizQuestionText.textContent = `${quizState.score}/${quizState.questions.length}問できた！`;
  quizChoices.innerHTML = "";
  quizFeedback.hidden = false;
  quizFeedback.innerHTML = `
    <strong>クイズ終了</strong>
    <p>ログに残すと、今日やったことに入るよ。</p>
  `;
  nextQuizButton.hidden = true;
  saveQuizLogButton.hidden = false;
}

function setupActions() {
  document.querySelector("#makePlan").addEventListener("click", renderPlan);
  document.querySelector("#saveLog").addEventListener("click", saveLog);
  document.querySelector("#makeVideoMemo").addEventListener("click", renderVideoMemo);
  document.querySelector("#saveMimicLog").addEventListener("click", saveMimicLog);
  document.querySelector("#playOffside").addEventListener("click", playOffsideScene);
  document.querySelector("#resetOffside").addEventListener("click", playOffsideScene);
  document.querySelector("#nextOffside").addEventListener("click", nextOffsideQuestion);
  offsideLineToggle.addEventListener("change", () => setOffsideLineVisible(offsideLineToggle.checked));
  document.querySelector("#offsideAnswerOff").addEventListener("click", () => answerOffsideQuiz("offside"));
  document.querySelector("#offsideAnswerSafe").addEventListener("click", () => answerOffsideQuiz("safe"));
  document.querySelector("#startQuiz").addEventListener("click", startQuiz);
  document.querySelector("#nextQuiz").addEventListener("click", nextQuiz);
  document.querySelector("#saveQuizLog").addEventListener("click", saveQuizLog);
  quizChoices.addEventListener("click", (event) => {
    const button = event.target.closest(".quiz-choice");
    if (!button) return;
    answerQuiz(Number(button.dataset.index));
  });
  document.querySelector("#timerStart").addEventListener("click", startTimer);
  document.querySelector("#timerPause").addEventListener("click", pauseTimer);
  document.querySelector("#timerNext").addEventListener("click", nextTimerStep);
  document.querySelector("#timerReset").addEventListener("click", () => resetTimer());
  document.querySelector("#clearLogs").addEventListener("click", () => showDeleteConfirm("all"));
  document.querySelector("#deleteSelectedLogs").addEventListener("click", () => showDeleteConfirm("selected"));
  document.querySelector("#cancelDelete").addEventListener("click", cancelDelete);
  document.querySelector("#confirmDelete").addEventListener("click", confirmDelete);
  document.querySelector("#exportCsv").addEventListener("click", exportLogsCsv);
  logList.addEventListener("change", (event) => {
    const checkbox = event.target.closest(".log-check");
    if (!checkbox) return;
    if (checkbox.checked) {
      selectedLogIds.add(checkbox.dataset.id);
    } else {
      selectedLogIds.delete(checkbox.dataset.id);
    }
    updateLogManageHint();
  });
}

todayLabel.textContent = formatToday();
loadSettings();
applySettingsToUI();
setupTabs();
setupChoices();
setupActions();
updateOtherPanel();
renderPlan();
renderOffsideScene();
updateDailyStats();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
