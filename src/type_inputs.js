const words = "There are stories that are true, in which each individual's tale is unique and tragic, and the worst of the tragedy is that we have heard it before, and we cannot allow ourselves to feel it too deeply. We build a shell around it like an oyster dealing with a painful particle of grit, coating it with smooth pearl layers in order to cope. This is how we walk and talk and function, day in, day out, immune to others' pain and loss. If it were to touch us it would cripple us or make saints of us; but, for the most part, it does not touch us. We cannot allow it to. There's never been a true war that wasn't fought between two sets of people who were certain they were in the right. The really dangerous people believe they are doing whatever they are doing solely and only because it is without question the right thing to do. And that is what makes them dangerous.".split(" ");
const numWords = words.length;

function addClass(elem, cName){
    // adds cName to the list of classes
    elem.className += ' ' + cName;
}
function removeClass(elem, cName){
    // replaces every occurrence of cName with empty str
    elem.className = elem.className.replace(cName, '');
}

function newGame() {
    document.getElementById('words').innerHTML = '';
    for (let i = 0; i < 200; i++){
        document.getElementById('words').innerHTML += makeDiv(generateWord());
    }
    // select the first word
    addClass(document.querySelector('.word'), 'curr');
    addClass(document.querySelector('.letter'), 'curr');
}

function generateWord(){
    const randIndex = Math.ceil(Math.random() * numWords);
    return words[randIndex];
}

function makeDiv(word) {
    // inserts a close span and opening span in between each letter, and put each word in its own div
    // Each letter in its own span
    return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</div>`;
}

/**
 * - Start timer
 * - Compare each key event to next letter
 * - Change color accordingly
 */
document.getElementById('game').addEventListener('keyup', ev => {
    const key = ev.key;
    const currLetter = document.querySelector('.letter.curr');
    const expLetter = currLetter.innerHTML;
    const isLetter = key.length === 1 && key !== ' ' && key !== '\t'; //not space or backspace

    if (isLetter) {
        if (currLetter){
            addClass(currLetter, key === expLetter ? 'correct' : 'incorrect');
            //alert(key === expLetter ? 'true' : 'false');
        }
    }
});


newGame();
