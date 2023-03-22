var sentences = ["Esta es una API, Solo que...", "Con un poco más de estilo", "Para que no se vea tan aburrida ;)  "];
var index = 0;
var frame = 0;
var goingback = false;
var sentenceIndex = 0

function mainloop() {
    requestAnimationFrame(mainloop);
    frame++;
    var modulo = goingback ? 5 : 10
    if (!(frame % modulo)) {
        index += goingback ? -1 : 1;
        if (index <= sentences[sentenceIndex].length) {
            document.querySelector("#hello").innerHTML = sentences[sentenceIndex].substr(0, index);
        } else {
            goingback = true;
        }
        if (index == 0) {
            goingback = false;
            sentenceIndex++;
            sentenceIndex %= sentences.length;
        }
    }


}
mainloop()