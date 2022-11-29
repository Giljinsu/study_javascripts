// let queryInputAll = document.querySelectorAll("input");
// for (queryInput of queryInputAll) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }

let newItem = `<li>
            <div>
                <input type="checkbox" name="" id="item3">
                <label for="item3">item three</label>
                <span>
                        <i class="material-icons delete">delete</i>
                </span>
            </div>
            </li>`;
let queryItemList = document.querySelector(".itmeList");
queryItemList.insertAdjacentHTML("beforeend",newItem);
            // document.querySelector('.itmeList').innerHTML+=newItem;
            // queryItemList.innerHTML += newItem;
            // 이런식으로 쓰면 alert가 작동을 안함 (새로 만들어짐?)
            // 작동할려면 위의 for문을 또 부여해줘야함 기존것은 사라짐
            // let queryInputs = document.querySelectorAll("input");
            // for (let queryInput of queryInputs) {
                //   queryInput.addEventListener("click", (event) => {
                    //     alert(`clicked ${event.target.id} : ${event.target.value}`);
                    //   });
                    // }



queryItemList.addEventListener("click", (event) => {
    if(event.target.id != "undefined" && event.target.id != "") { // undefined는 ""이런식으로 나오나봄
    alert(`clicked ${event.target.id} : ${event.target.value}`);
    }
    if(event.target.innerHTML == "delete") {
        event.target.parentElement.parentElement.parentElement.remove();
    }
}); // 상위 element에 event를 검
// queryItemList.insertAdjacentHTML("beforebegin",newItem);
