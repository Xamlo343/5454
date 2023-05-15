let a = ""; // first number
let b = ""; // secont number
let sign = ""; //знак операции
let finish = false;
const digit =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"]

//экран
const out = document.querySelector(".calc-screen p")

function clearAll () {
    a = ""; // first number
    b = ""; // secont number
    sign = ""; //знак операции
    finish = false;
    out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
    //нажаиа кнопка
    if(event.target.classList.contains("div")) return;
    //нажата кнопка ClearAll ac
    if(event.target.classList.contains("ac")) return;

    out.textContent = "";
    //получаю нажатую кнопку
    const key = event.target.textContent;

    // eсли нажата кнопка 0-9
    if (digit.includes(key)) {
        a += key;
        console.log(a, b, sign);
    }

}