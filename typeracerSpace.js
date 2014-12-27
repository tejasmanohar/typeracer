// Autofill Next Word

count = 0;

function printNext() {
  word = ansArr[count];
  inputs[0].value = word;
  count++;
}

document.onkeypress = printNext;


// Grab First Word

firstWord = null;

for (i=0; i<99; ++i) {
  firstWord = document.getElementById('nhwMiddlegwt-uid-' + i);
  if (firstWord != null) {
    break;
  }
}


// Grab Remaining Answer

ans = null;

for (i=0; i<99; ++i) {
  ans = document.getElementById('nhwRightgwt-uid-' + i);
  if (ans != null) {
    break;
  }
}


// Fill in Answer

ans = firstWord.innerHTML + ans.innerHTML;
ansArr = ans.split(' ');

inputs = document.getElementsByTagName('input');

printNext();
