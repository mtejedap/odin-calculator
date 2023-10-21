function add(n1, n2) {
    return +n1 + +n2;
}

function sub(n1, n2) {
    return +n1 - +n2;
}

function multiply(n1, n2) {
    return +n1 * +n2;
}

function divide(n1, n2) {
    return +n1 / +n2;
}

let input1 = "";
let input2 = "";
let operator = "";
let isSecond = false;
const enterButton = document.querySelector(".enter");

const display = document.querySelector(".display");

const button0 = document.querySelector(".zero");
button0.addEventListener("click", () => {
    if (isSecond == false) {
        display.textContent = display.textContent + "0";
        input1 += "0";
    } else {
        display.textContent += "0";
        input2 += "0";
    }
});
const button1 = document.querySelector(".one");
button1.addEventListener("click", () => {
    if (isSecond == false) {
        display.textContent = display.textContent + "1";
        input1 += "1";
    } else {
        display.textContent += "1";
        input2 += "1";
    }
});
const button2 = document.querySelector(".two");
button2.addEventListener("click", () => {
    if (isSecond == false) {
        display.textContent = display.textContent + "2";
        input1 += "2";
    } else {
        display.textContent += "2";
        input2 += "2";
    }
});
const button3 = document.querySelector(".three");
button3.addEventListener("click", () => {
    if (isSecond == false) {
        display.textContent = display.textContent + "3";
        input1 += "3";
    } else {
        display.textContent += "3";
        input2 += "3";
    }
});
const button4 = document.querySelector(".four");
button4.addEventListener("click", () => {
    if (isSecond == false) {
        display.textContent = display.textContent + "4";
        input1 += "4";
    } else {
        display.textContent += "4";
        input2 += "4";
    }
});
const button5 = document.querySelector(".five");
button5.addEventListener("click", () => {
    if (isSecond == false) {
        display.textContent = display.textContent + "5";
        input1 += "5";
    } else {
        display.textContent += "5";
        input2 += "5";
    }
});
const button6 = document.querySelector(".six");
button6.addEventListener("click", () => {
    if (isSecond == false) {
        display.textContent = display.textContent + "6";
        input1 += "6";
    } else {
        display.textContent += "6";
        input2 += "6";
    }
});
const button7 = document.querySelector(".seven");
button7.addEventListener("click", () => {
    if (isSecond == false) {
        display.textContent = display.textContent + "7";
        input1 += "7";
    } else {
        display.textContent += "7";
        input2 += "7";
    }
});
const button8 = document.querySelector(".eight");
button8.addEventListener("click", () => {
    if (isSecond == false) {
        display.textContent = display.textContent + "8";
        input1 += "8";
    } else {
        display.textContent += "8";
        input2 += "8";
    }
});
const button9 = document.querySelector(".nine");
button9.addEventListener("click", () => {
    if (isSecond == false) {
        display.textContent = display.textContent + "9";
        input1 += "9";
    } else {
        display.textContent += "9";
        input2 += "9";
    }
});

const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
    if (input1 == "") {
    } else if (isSecond == false) {
        display.textContent += " + ";
        operator = "add";
        isSecond = true;
    } else {
        if (operator != "") {
            enterButton.click();
            display.textContent += " + ";
            isSecond = true;
            operator = "add";
            return;
        }
        let result = add(input1, input2);
        display.textContent = result;
        input1 = "" + result;
        input2 = "";
        operator = "";
        display.textContent += " + ";
    }
});

const subButton = document.querySelector(".sub");
subButton.addEventListener("click", () => {
    if (input1 == "") {
    } else if (isSecond == false) {
        display.textContent += " - ";
        operator = "sub";
        isSecond = true;
    } else {
        if (operator != "") {
            enterButton.click();
            display.textContent += " - ";
            isSecond = true;
            operator = "sub";
            return;
        }
        let result = sub(input1, input2);
        display.textContent = result;
        input1 = "" + result;
        input2 = "";
        operator = "";
        display.textContent += " - ";
    }
});

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", () => {
    if (input1 == "") {
    } else if (isSecond == false) {
        display.textContent += " * ";
        operator = "multiply";
        isSecond = true;
    } else {
        if (operator != "") {
            enterButton.click();
            display.textContent += " * ";
            isSecond = true;
            operator = "multiply";
            return;
        }
        let result = multiply(input1, input2);
        display.textContent = result;
        input1 = "" + result;
        input2 = "";
        operator = "";
        display.textContent += " * ";
    }
});

const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", () => {
    if (input1 == "") {
    } else if (isSecond == false) {
        display.textContent += " / ";
        operator = "divide";
        isSecond = true;
    } else {
        if (operator != "") {
            enterButton.click();
            display.textContent += " / ";
            isSecond = true;
            operator = "divide";
            return;
        }
        let result = divide(input1, input2);
        display.textContent = result;
        input1 = "" + result;
        input2 = "";
        operator = "";
        display.textContent += " / ";
    }
});

enterButton.addEventListener("click", () => {
    if (isSecond == true && input2 != "") {
        if (operator == "add") {
            let result = add(input1, input2);
            display.textContent = result;
            input1 = "" + result;
            input2 = "";
            operator = "";
            isSecond = false;
        } else if (operator == "sub") {
            let result = sub(input1, input2);
            display.textContent = result;
            input1 = "" + result;
            input2 = "";
            operator = "";
            isSecond = false;
        } else if (operator == "multiply") {
            let result = multiply(input1, input2);
            display.textContent = result;
            input1 = "" + result;
            input2 = "";
            operator = "";
            isSecond = false;
        } else if (operator == "divide") {
            let result = divide(input1, input2);
            display.textContent = result;
            input1 = "" + result;
            input2 = "";
            operator = "";
            isSecond = false;
        }
    }
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    input1 = "";
    input2 = "";
    operator = "";
    isSecond = false;
    display.textContent = "";
});