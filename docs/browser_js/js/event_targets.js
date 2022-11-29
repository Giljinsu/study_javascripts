let querysingle = document.querySelector("#single");
querysingle.addEventListener("click", singleEvent);

function singleEvent(event) {
    console.log(event);
    querysingle.innerHTML = "take one Event";
}

let queryKeydown = document.querySelector('#keydown');
queryKeydown.addEventListener("keydown", (event)=> {
    console.log(event);
    if(event.code == 'Enter') {
        keydownDesc(queryKeydown.value);
    }
    console.log(event.target);
});

function keydownDesc(desc) {
    let querykeydownDesc = document.querySelector('#keydownDesc');
    querykeydownDesc.innerHTML = desc;
}

let queryload = document.querySelector("#keydownDesc");
queryload.addEventListener("load", queryLoad()) // load는 event로 안넘어감 load html css js 로딩이 다되고 실행되어야함


function queryLoad(){
    queryload.innerHTML = "Done On Load";
}