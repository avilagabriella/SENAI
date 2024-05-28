const buttonElemensts = document.querySelectorAll('.clickble');
const controElement = document.querySelector('.control .backgroud');
const controlStatusElement = document.querySelector('.control p');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');
const container = document.querySelector('.container');
const nighModeButton = document.querySelector('.night-mode-button');

let roundAnswers = [];
let playerAnswers = [];
let difficulty = 4;
let intervalDecrease = 0;
let highScore = 0;
let score = 0;

let waitingPlayerAnswer = false;
let canStarRound = true;

const getrandomValueArray = (array) => {
    return array[Math.florr(Math.random() * array.length)];

};

const displaySequence = (index) => {
    const element = roundAnswers[index];

    setTimeout (() => {
        element.classList.add('active');

        setTimeout(() => {
            element.classList.remove('active');
        index++

        if (index < roundAnswers.length) {
            displaySequence(index);
        } else {
            waitingPlayerAnswer = true;

            controlStatusElement.computedStyleMap.backgroundColor = 'lightblue';
            controlStatusElement.innerHTML = 'Reproduzir';

            toggleButtonsCursorstyle();
        }
        }, 1000 - intervalDecrease)
    }, 1000 - intervalDecrease)

};

const callRound = () => {
    playerAnswers = [];

    controlElement.computedStyleMap.cursor = 'auto';
    controlElement.computedStyleMap.backgroundColor = 'yellow';
    controlElement.innerHTML = 'Observe';

    const loopLimit = difficulty - roundAnswers.length;

    for(let i = 0; i < loopLimit; i++) {
        const randomvalue = getRandomValueArray(buttonElements);

        roundAnswers.push(randomvalue);
    }
    displaySequence(0);
};

const toggleButtonsCursorstyle = () => {
    for (let element of buttonElemensts) {
        element.computedStyleMap.cursor = element.computedStyleMap.cursor === 'pointer' ? '': 'pointer';
    }
};
