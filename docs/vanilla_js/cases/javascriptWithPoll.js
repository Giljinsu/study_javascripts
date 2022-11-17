// 화면 정의서 대로 출력
// -  Array , Object
// - functions : 3개 만들어
// - 답변은 미리 파일에 저장된것을 사용
// - 화면정의서는 문항이 4개인데 5개로 

// -프로세스
// 입력 
// + 문항 사항 : object in Array - [{문항},{문항},{문항},{문항}] (option : orders가 현재 표시된 상태를 순서 있게 만드는 것)
// + 설문 답항 : object in Array - [{답항},{답항},{답항},{답항}] (option : orders가 현재 표시된 상태를 순서 있게 만드는 것)
// + 답변에 대한사항 : 파일 - [1,2 ,4, 3] -하드코딩 X 파일 가져옴

// 처리
// 문항, 설문 답항, 답변 매칭


// 출력
// 매칭 출력

// ======================================== 입력 ========================================
let str = "";

const fs = require('fs');
const filepath =
    process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/cases/answers.txt"

let inputs = fs.readFileSync(filepath).toString().trim().split("\n").map(Number);

let surveyQuestions = [
    {questions_uid : "Q1", questions:"해당 매장을 방문시 매장은 청결 하였습니까?", orders : 1},
    {questions_uid : "Q4", questions:"해당 매장을 다음에도 재방문 하실 의향이 있으십니까?", orders : 4},
    {questions_uid : "Q2", questions:"직원이 제조한 음료에 대해 맛은 좋았습니까?", orders : 2},
    {questions_uid : "Q5", questions:"주문하신 음료가 나오기까지 시간이 적당하였습니까?", orders : 5},
    {questions_uid : "Q3", questions:"주문시 직원은 고객님께 친절 하였습니까?", orders : 3}
];

let surveyAnswers = [
    {example_uid : "E5",  example:"매우 그렇다", orders : 5},
    {example_uid : "E1", example:"전혀 아니다", orders : 1},
    {example_uid : "E4", example:"그렇다", orders : 4},
    {example_uid : "E2", example:"아니다", orders : 2},
    {example_uid : "E3", example:"보통이다", orders : 3}
];

// 정렬
surveyQuestions.sort((a,b) => a['orders']-b['orders']);
surveyAnswers.sort((a,b) => a['orders']-b['orders']);

// ======================================== 처리 ========================================

function surveyQuestion(i) { //설문 질문
    console.log(`${surveyQuestions[i]['orders']}. ${surveyQuestions[i]['questions']}`);
}

function surveyAnswer(...args) { // 설문 답항
    args.forEach(arg => {
        str += `(${surveyAnswers[arg]['orders']}) ${surveyAnswers[arg]['example']} `;
    })
    console.log(str);
    console.log("");
    str= "";
}

function userAnswer(i) { // 유저 답변
    console.log(`답) (${inputs[i]})\n`);
}

// ======================================== 출력 ========================================
//const sortedTypeArray = animalArray.sort((a,b) => a.type - b.type);

for(let i = 0 ; i<surveyQuestions.length; i++) {
    surveyQuestion(i);
    switch(i) {
            case 0:  
                surveyAnswer(0,1,2);
                userAnswer(i);
              break;
            case 1:
                surveyAnswer(0,1,2,3);
                userAnswer(i);
                break;
            case 2:
                surveyAnswer(0,1);
                userAnswer(i);
                 break;    
            case 3:
                surveyAnswer(0,1,2,3,4);
                userAnswer(i);
                break;
            case 4:
                surveyAnswer(0,1,2);
                userAnswer(i);
                break;
            }       
}

console.log("--------------------- 설문자 선택 --------------------------");

for(let i = 0 ; i<surveyQuestions.length; i++) {
    surveyQuestion(i);
    userAnswer(i);
}

console.log("이용해주셔서 감사합니다!");
