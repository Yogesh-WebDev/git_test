const backGround = document.querySelector('.container');
const game = document.querySelector('.game-container');
const reset = document.querySelector('#btn-2');
const start = document.querySelector('#btn-1');
const popeye = document.querySelector('#popeye');

let idIdex = 0;

start.addEventListener('click', function () {
    clearAllThings();
    startToPlay();
});

function clearAllThings() {
    var elements = document.querySelectorAll('.btnCls');

    elements.forEach(element => {
        backGround.removeChild(element)
    });
    clearPreviousGame();

};

function startToPlay() {
    generateNextGame();
    const toggleButtons = document.createElement('div');
    toggleButtons.innerHTML = `
            <button id="up" class="btnCls">UP</button>
            <button id="down" class="btnCls">DOWN</button>
            <button id="right" class="btnCls">RIGHT</button>
            <button id="left" class="btnCls">LEFT</button>
    `;
    backGround.appendChild(toggleButtons);
        const up = document.querySelector('#up');
        const down = document.querySelector('#down');
        const right = document.querySelector('#right');
        const left = document.querySelector('#left');
       
       
    up.addEventListener('click', function () {
        popeye.style.cssText = `
        grid-column-start: ${(getComputedStyle(popeye).gridColumnStart)};
        grid-column-end: ${(getComputedStyle(popeye).gridColumnEnd)};
        grid-row-start:${((getComputedStyle(popeye).gridRowStart)-1)<1 ?3:(getComputedStyle(popeye).gridRowStart)-1} ;
        grid-row-end:${((getComputedStyle(popeye).gridRowEnd)-1)<2?4:(getComputedStyle(popeye).gridRowEnd)-1} ;
        width: 100px;
        height: 100px;
        z-index:1;
        `;

    });
    down.addEventListener('click', function () {
        popeye.style.cssText = `
        grid-column-start: ${(getComputedStyle(popeye).gridColumnStart)};
        grid-column-end: ${(getComputedStyle(popeye).gridColumnEnd)};
        grid-row-start:${((getComputedStyle(popeye).gridRowStart)+1)>3?1:(getComputedStyle(popeye).gridRowStart)+1} ;
        grid-row-end:${((getComputedStyle(popeye).gridRowEnd)+1)>4?2:(getComputedStyle(popeye).gridRowEnd)+1}  ;
        width: 100px;
        height: 100px;
        z-index:1;
        `;
    });
    right.addEventListener('click', function () {
        popeye.style.cssText = `
        grid-column-start: ${((getComputedStyle(popeye).gridColumnStart)+1)>11?1:(getComputedStyle(popeye).gridColumnStart)+1};
        grid-column-end: ${((getComputedStyle(popeye).gridColumnEnd)+1)>12?2:(getComputedStyle(popeye).gridColumnEnd)+1};
        grid-row-start:${(getComputedStyle(popeye).gridRowStart)} ;
        grid-row-end:${(getComputedStyle(popeye).gridRowEnd)} ;
        width: 100px;
        height: 100px;
        z-index:1;
        `;
    });
    left.addEventListener('click', function () {
        popeye.style.cssText = `
        grid-column-start: ${((getComputedStyle(popeye).gridColumnStart)-1)<1?11:(getComputedStyle(popeye).gridColumnStart)-1};
        grid-column-end: ${((getComputedStyle(popeye).gridColumnEnd)-1)<2?12:(getComputedStyle(popeye).gridColumnEnd)-1};
        grid-row-start:${(getComputedStyle(popeye).gridRowStart)} ;
        grid-row-end:${(getComputedStyle(popeye).gridRowEnd)} ;
        width: 100px;
        height: 100px;
        z-index:1;
        `;
    });

};
reset.addEventListener('click', function () {
    clearPreviousGame()
    generateNextGame();
});

function clearPreviousGame() {
    idIdex = 0;
    var elements = document.querySelectorAll('.oliveClass');

    elements.forEach(element => {
        game.removeChild(element)
    });

}


function generateNextGame() {
    for (let index = 0; index < 5; index++) {
        const olive = document.createElement('img');
        olive.setAttribute('src', './assets/img/olive.png');
        olive.setAttribute('id', `olive${++idIdex}`);
        olive.classList.add('oliveClass');

        let columnIndex = Math.round(Math.random() * 10);
        let rowIndex = Math.round(Math.random() * 10);

        olive.style.cssText = `
            grid-column-start: ${(columnIndex<12)? columnIndex:1};
            grid-column-end: ${columnIndex++};
            grid-row-start:${(rowIndex < 4) ? rowIndex : 1} ;
            grid-row-end:2 ${rowIndex++};
            width: 100px;
            height: 100px;
            z-index:2;
            `;
        console.log(olive);
        game.appendChild(olive);
    }
}