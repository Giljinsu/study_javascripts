
    let queryItems = document.querySelectorAll(".item");
    // queryItems.forEach((item, index) => {
    //     console.log(item);
    // })

    let queryLists = document.querySelectorAll(".list");
    let queryList = document.querySelector(".list");

    let pByTagName = document.getElementsByTagName("p");
    console.log(`${pByTagName}`);
    
    let listByClassName = document.getElementsByClassName("list");
    console.log(`${listByClassName}`);

    // let titleById = document.getElementById("title");
    // titleById.innerHTML = "Title By Id";

    let queryTitle = document.querySelector("#title");
    // queryTitle.innerHTML = "query Title!";

    let elemetById = document.getElementById("selector");
    // console.log(`elemetById : ${elemetById}`);
    // elemetById.innerHTML = "<b>Change selector</b>";

    //change properties from querySelector
    queryTitle.style.color = "blue";
    queryTitle.style.fontSize = "2rem";
    queryTitle.style.backgroundColor = "rgba(255,0,0,0.55)";

    let queryContent= document.querySelector('#contentId')
    