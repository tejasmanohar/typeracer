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

getScript('http://code.jquery.com/jquery-latest.min.js',function(){
  return win();
});

function win() {
  console.log($('div.nonHideableWords').text());
  chars = text.length;
  arrText = text.split(' ');
  arrLength = arrText.length;
}
