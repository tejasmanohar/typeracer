// Load JS Library in JS
function getScript(url,success) {
  var script=document.createElement('script');
  script.src=url;
  var head=document.getElementsByTagName('head')[0],
  done=false;script.onload=script.onreadystatechange=function(){
    if(!done&&(!this.readyState||this.readyState=='loaded'||this.readyState=='complete')){
    done=true;success();script.onload=script.onreadystatechange=null;head.removeChild(script);
    }
  };
  head.appendChild(script);
}


// Load Latest, Compressed jQuery
getScript('http://code.jquery.com/jquery-latest.min.js',function(){
  return win();
});


// Delayed Loop
var forEachDelayed = function recur(array, fn, delay, ix) {
  ix = (typeof ix === "number") ? ix : 0;
  fn(array[ix], ix, array);
  if (ix === array.length - 1) {
    return;
  }
  setTimeout(function() {
    recur(array, fn, delay, ix + 1);
  };
}


// Rek Scrubz
function win() {
  text = $('div.nonHideableWords').text();
  chars = text.length;
  arrText = text.split(' ');
  arrLength = arrText.length;
  timeRemaining = (((chars/5)*60)/190)*1000;
  delay = timeRemaining/arrLength;
  for (var i = 0; i < arrLength; i++) {
    forEachDelayed(arrText, function (text) {
      $('.txtInput').val(text).trigger({type : 'keypress', which : 32});
    }, delay);
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
