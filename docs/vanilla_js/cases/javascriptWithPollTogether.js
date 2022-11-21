let str = "";

const fs = require('fs');
const filepath =
    process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/cases/answers.txt"

let inputs = fs.readFileSync(filepath).toString().trim().split("\n").map(Number); // 유저의 답변

let surveyQuestions = [ //문항
    {questions_uid : "Q1", questions:"해당 매장을 방문시 매장은 청결 하였습니까?", orders : 1},
    {questions_uid : "Q4", questions:"해당 매장을 다음에도 재방문 하실 의향이 있으십니까?", orders : 4},
    {questions_uid : "Q2", questions:"직원이 제조한 음료에 대해 맛은 좋았습니까?", orders : 2},
    {questions_uid : "Q5", questions:"주문하신 음료가 나오기까지 시간이 적당하였습니까?", orders : 5},
    {questions_uid : "Q3", questions:"주문시 직원은 고객님께 친절 하였습니까?", orders : 3}
];

let surveyAnswers = [ //답항
    {example_uid : "E5",  example:"매우 그렇다", orders : 5},
    {example_uid : "E1", example:"전혀 아니다", orders : 1},
    {example_uid : "E4", example:"그렇다", orders : 4},
    {example_uid : "E2", example:"아니다", orders : 2},
    {example_uid : "E3", example:"보통이다", orders : 3}
];

const answers = [ // 문항 답항 연결
    { questions_uid: "Q1", example_uid: "E1" },
    { questions_uid: "Q1", example_uid: "E2" },
    { questions_uid: "Q1", example_uid: "E3" },
    { questions_uid: "Q2", example_uid: "E1" },
    { questions_uid: "Q2", example_uid: "E2" },
    { questions_uid: "Q2", example_uid: "E3" },
    { questions_uid: "Q2", example_uid: "E4" },
    { questions_uid: "Q3", example_uid: "E1" },
    { questions_uid: "Q3", example_uid: "E2" },
    { questions_uid: "Q4", example_uid: "E1" },
    { questions_uid: "Q4", example_uid: "E2" },
    { questions_uid: "Q4", example_uid: "E3" },
    { questions_uid: "Q4", example_uid: "E4" },
    { questions_uid: "Q4", example_uid: "E5" },
    { questions_uid: "Q5", example_uid: "E1" },
    { questions_uid: "Q5", example_uid: "E2" },
    { questions_uid: "Q5", example_uid: "E3" },
  ];

// 정렬
surveyQuestions.sort((a,b) => a['orders']-b['orders']);
surveyAnswers.sort((a,b) => a['orders']-b['orders']);


let idx;
let compare;
for (idx = 0; idx < answers.length; idx++) {
  if (compare != answers[idx]["questions_uid"]) {
    console.log(`${answers[idx]["questions_uid"]}`);
    console.log(`${answers[idx]["example_uid"]}`);
  } else{
    console.log(`${answers[idx]["example_uid"]}`);
  }
  compare = answers[idx]["questions_uid"];
}
console.log(`answers.length : ${answers.length}, idx : ${idx}`)

