var qna1 = false;
var qna2 = false;
var qna3 = false;
function extendContent(idName) {
    let element = document.getElementById(idName);
    if (idName == "QnA1"){
        qna1 = !qna1;
        if (qna1) {
            element.classList.add("closed");
            element.classList.remove("opened");
        }
        else{
            element.classList.add("opened");
            element.classList.remove("closed");
        }
    }
    else if (idName == "QnA2"){
        qna2 = !qna2;
        if (qna2) {
            element.classList.add("closed");
            element.classList.remove("opened");
        }
        else{
            element.classList.add("opened");
            element.classList.remove("closed");
        }
    }
    else if (idName == "QnA3"){
        qna3 = !qna3;
        if (qna3) {
            element.classList.add("closed");
            element.classList.remove("opened");
        }
        else{
            element.classList.add("opened");
            element.classList.remove("closed");
        }
    }
}