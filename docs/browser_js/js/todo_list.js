let comment = document.querySelector("#comment");
let commentButton = document.querySelector("#commentButton");
let newComment = document.querySelector('#commentDiv');

// let newItem = `<div class="newComment">
//             <span>
//                     ${comment.value}
//             </span>
//             <span>
//                 <i class="material-icons favorite">favorite</i>
//             <span>
//                 <i class="material-icons delete">delete</i>
//             </span>
//         </div>`;

// 클릭시 내용 지우기
comment.addEventListener('click', (event) => {
    comment.value='';
})

//엔터시 추가
comment.addEventListener('keydown', (event) => {
    console.log("");
    if(event.code=='Enter') {
        addComment(event);
    }
})

//버튼
commentButton.addEventListener('click', (event) => {
    addComment(event);
})

//커멘트 추가
function addComment(event) {
    if(comment.value=="") {
        alert("문장을 입력해주세요!");
        return;
    }
    let newItem = `<div class="newComment">
            <span>
                    ${comment.value}
            </span>
            <span>
                <i class="material-symbols-outlined favorite" id="">favorite</i>
                <i class="material-icons delete">delete</i>
            </span>
        </div>`;
    newComment.insertAdjacentHTML('beforeend',newItem);
}

// 삭제 및 좋아요
let flag=false;
newComment.addEventListener('click', (event) => {
    // console.log('');
    if(event.target.innerHTML=="delete") {
        event.target.parentElement.parentElement.remove();
    }
    //좋아요
    if(event.target.innerHTML=="favorite"&&flag==true) {
        event.target.id="";
        flag=false;
        return;
    }
    if(event.target.innerHTML=="favorite") {
        if(flag==false){
        event.target.id="favorite";
        flag=true;
        }
        return;
    }
})