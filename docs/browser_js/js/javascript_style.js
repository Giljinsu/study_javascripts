let removeBtn = document.querySelector('#removeBtn');
let hideBtn = document.querySelector('#hideBtn');
let resetBtn = document.querySelector('#resetBtn');

let removeDiv;
let hideDiv;

removeBtn.addEventListener("click", (event) => {
    removeEvent(event);
});

hideBtn.addEventListener("click", (event) => {
    hideEvent(event);
});

resetBtn.addEventListener("click", (event) => {
    resetEvent(event);
});

function removeEvent(event) {
    removeDiv = document.querySelector('#removeDiv');
    removeDiv.style.display='none';
}

function hideEvent(event) {
    hideDiv = document.querySelector('#hideDiv');
    hideDiv.style.visibility = 'hidden';
}

function resetEvent(event) {
    removeDiv.style.display="block";
    hideDiv.style.visibility='visible';
}