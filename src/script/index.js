var qna1 = false;
var qna2 = false;
var qna3 = false;
let menuBarNav = false;

function setClass(isOpen, element, elementAnswer) {
    if (isOpen) {
        element.classList.add("closed");
        element.classList.remove("opened");
        elementAnswer.classList.add("AnswerOpen");
        elementAnswer.classList.remove("AnswerClose");
    }
    else{
        element.classList.add("opened");
        element.classList.remove("closed");
        elementAnswer.classList.add("AnswerClose");
        elementAnswer.classList.remove("AnswerOpen");
    }
}

function extendContent(idName) {
    let element = document.getElementById(idName);
    let elementAnswer = document.getElementById(idName+"A");
    if (idName == "QnA1"){
        qna1 = !qna1;
        setClass(qna1, element, elementAnswer);
    }
    else if (idName == "QnA2"){
        qna2 = !qna2;
        setClass(qna2, element, elementAnswer);
    }
    else if (idName == "QnA3"){
        qna3 = !qna3;
        setClass(qna3, element, elementAnswer);
    }
}

let elementBar = document.getElementById("menuBar");
function openBar(){
    elementBar.classList.remove("menuClosed");
    elementBar.classList.add("menuOpened");
    document.classList.add("overflow-hidden");
    console.log("Bar open");
}

function closeBar() {
    elementBar.classList.remove("menuOpened");
    elementBar.classList.add("menuClosed");
    document.classList.remove("overflow-hidden");
    console.log("Bar close");
}

function HowItWorks(step) {
    document.getElementById("HowItWorks1").classList.remove("desktop:block");
    document.getElementById("HowItWorks1").classList.remove("mobile:hidden");
    document.getElementById("HIW1").children[0].classList.remove("desktop:invert");
    for (let i = 1; i <= 4; i++) {
        if (i == step) continue;
        let id = "HowItWorks"+i;
        let id2 = "HIW"+i;
        document.getElementById(id).classList.add("hidden");
        document.getElementById(id).classList.remove("block");
        document.getElementById(id2).classList.add("unselected");
        document.getElementById(id2).classList.remove("selected");
    }
    let id = "HowItWorks"+step;
    let id2 = "HIW"+step;
    document.getElementById(id).classList.add("block");
    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id2).classList.add("selected");
    document.getElementById(id2).classList.remove("unselected");
}