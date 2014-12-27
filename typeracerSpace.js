wordNumber = 0;
function PrintNextWord() {
    word = answerArr[wordNumber];
    inputs[0].value = word;
    wordNumber++;
}
 
document.onkeypress = PrintNextWord;
 
firstWord = null;
for (i=0; i<99; ++i) {
    firstWord = document.getElementById("nhwMiddlegwt-uid-" + i);
    if (firstWord != null) {
        break;
    }
}
 
answer = null;
for (i=0; i<99; ++i) {
    answer = document.getElementById("nhwRightgwt-uid-" + i);
    if (answer != null) {
        break;
    }
}
 
answer = firstWord.innerHTML + answer.innerHTML;
// alert(answer);
answerArr = answer.split(" ");
 
inputs = document.getElementsByTagName("input");
 
PrintNextWord();
