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
getScript('http://code.jquery.com/jquery-latest.min.js', function(){
  return trollEveryoneElse();
});


// Delayed Loop
var forEachDelay = function(delay, f, xs) {
  if (xs.length) {
    setTimeout(function() {
      f(xs[0]);
      forEachDelay(delay, f, xs.slice(1));
    }, delay);
  }
}


// Rek Scrubz
function trollEveryoneElse() {
  var text = $('div.nonHideableWords').text();
  var chars = text.length;
  var arrText = text.split(' ');
  var arrLength = arrText.length;
  var timeRemaining = (((chars/5)*60)/190)*1000;
  var delay = timeRemaining/arrLength;
  forEachDelay(delay, function (text) {
    $('.txtInput').val(text).trigger({type : 'keypress', which : 32});
  }, arrText);
}
