typeracer.js
============

easy way to destroy everyone else in typeracer


## instructions

inject `typeracer.js` or `typeracerSpace.js` once race has started


## why this?

it triggers events listened for by their JavaScript handlers

i also included `typeracerSpace.js` which will autofill the word. if you click the input field (`.txtInput`) and hold your keyboard's space key, you will do very, very well :laughing: ... __this method seems to consistently perform better at avoiding being caught by the system since it uses events emitted from your keyboard rather than jQuery's *nearly* undocumented `which` argument.__


## warning

that said, be careful. do it too many times and the captcha test comes up, which gets hard w/ the speed requirements! also, you may get disqualified lol (WARNING: gets fun quickly)

![Screenshot #1](http://i.imgur.com/6IyFmeU.png)

... (tried that a *few* more times)

![Screenshot #2](http://i.imgur.com/RlDtSd5.png)

... *snap*

![Screenshot #3](http://i.imgur.com/6kdeDYM.png)

5 second countdown... *ohhh snap*

![Screenshot #4](http://i.imgur.com/LkhNIQu.png)

i have not implemented a bot for the above situation *yet*. i'll take a look at neuron networks and OCR to de-captcha when I get a chance. i think it's plausible because accuracy doesn't have to be near 100% since it's a typing test!

**UPDATE:** [node-decaptcher](https://github.com/icodeforlove/node-decaptcher) seems to produce results with high enough accuracy for the [challenge captcha](http://play.typeracer.com/challenge?id=tr:...). now it's a matter of implementing decaptcha or a similar mechanism in the browser as [@jeresig](https://github.com/jeresig) describes [here](http://ejohn.org/blog/ocr-and-neural-nets-in-javascript/).

![Screenshot #5](http://i.imgur.com/iz9tora.png)

btw, i don't encourage cheating
