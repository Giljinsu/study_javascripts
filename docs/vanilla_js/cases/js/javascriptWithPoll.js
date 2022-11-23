// -한 문항 씩 출력,
// -Next Button 클릭 시 다음 문항 출력
// - 완료 시 선택했던 문항 답항 출력
// - javascriptWithPoll.html . css .js
// html은 사이트 링크 js도 올려

// ======================================== 입력 ========================================


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

// ======================================== 처리 ========================================

function survey(i) { // 질문 추가시 자동으로 추가 하기 위함
    let exmaple_ans = "";
    let ans_num = "";
    
    answers.forEach(answer => {
        if(answer["questions_uid"] == "Q"+(i+1)) {
            exmaple_ans += answer['example_uid']+" ";
            console.log();
        }
    })
    exmaple_ans = exmaple_ans.trim();
    example_strs = exmaple_ans.split(' ');
    example_strs.forEach(example_str => {
        ans_num += (example_str.charAt(1)-1)+" ";
    })

    ans_num= ans_num.trim().split(' ').map(Number);
    return ans_num; // E1, E2 여기서 E알파벳 없애고 숫자로 변경
}

function surveyQuestion(i) { //설문 질문
    return `${surveyQuestions[i]['orders']}. ${surveyQuestions[i]['questions']}`;
}

function surveyAnswer(args) { // 설문 답항 i는 설문질문 번호
    let str = "";
    args.forEach(arg => {
        str += `<input type="radio" onclick='answer_check(${arg+1})' id="${arg+1}ans" name="ans"/><label id="${arg+1}label" for="${arg+1}ans">(${surveyAnswers[arg]['orders']}) ${surveyAnswers[arg]['example']}</label><br>`;
    });
    return str;
    
}


// ======================================== 출력 ========================================
let i = 0;
let prevButton = document.querySelector("#btn_Prev");
let nextButton = document.querySelector("#btn_Next");
let surveyQuestion_Html = document.querySelector('#surveyQuestion');
let surveyAnswer_Html = document.querySelector("#surveyAnswer");
let check=[];

prevButton.addEventListener("click", prevEvent);
nextButton.addEventListener("click", nextEvent);
    

let temp = "";
function nextEvent() {
    if(i<surveyQuestions.length-1) {i++;
        surveyQuestion_Html.innerHTML=surveyQuestion(i);
        surveyAnswer_Html.innerHTML=surveyAnswer(survey(i));
    } else if(i== (surveyQuestions.length-1)) {
            temp = "";
        for(let j = 0; j<surveyQuestions.length ; j++) {
            temp += surveyQuestion(j)+`<br>` +`답 : ${check[j+1]} <br><br>` ;
        }
        surveyQuestion_Html.innerHTML=temp;
        surveyAnswer_Html.innerHTML=' ';
        i++;
    }
}

function prevEvent() {
    if(i>0) {i--;}
    surveyQuestion_Html.innerHTML=surveyQuestion(i);
    surveyAnswer_Html.innerHTML=surveyAnswer(survey(i));
}
surveyQuestion_Html.innerHTML=surveyQuestion(i);
surveyAnswer_Html.innerHTML=surveyAnswer(survey(i));

function answer_check(num) {
    let temp = document.getElementById(`${num}label`);
    // temp.innerHTML;
    check[i+1] = temp.innerText;
}







