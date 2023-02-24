const words = "There are stories that are true, in which each individual's tale is unique and tragic, and the worst of the tragedy is that we have heard it before, and we cannot allow ourselves to feel it too deeply. We build a shell around it like an oyster dealing with a painful particle of grit, coating it with smooth pearl layers in order to cope. This is how we walk and talk and function, day in, day out, immune to others' pain and loss. If it were to touch us it would cripple us or make saints of us; but, for the most part, it does not touch us. We cannot allow it to. There's never been a true war that wasn't fought between two sets of people who were certain they were in the right. The really dangerous people believe they are doing whatever they are doing solely and only because it is without question the right thing to do. And that is what makes them dangerous.".split(" ");
const numWords = words.length;

function newGame() {
    document.getElementById('words').innerHTML = '';
    for (let i = 0; i < 200; i++){
        document.getElementById('words').innerHTML += makeDiv(generateWord());
    }
}

function generateWord(){
    const randIndex = Math.ceil(Math.random() * numWords);
    return words[randIndex];
}

function makeDiv(word) {
    // inserts a close span and opening span in between each letter, and put each word in its own div
    return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</div>`;
}

newGame();
