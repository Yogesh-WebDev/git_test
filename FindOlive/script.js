const backGround = document.querySelector('.container');
const game = document.querySelector('.game-container');
const reset = document.querySelector('#btn-2');
const popeye = document.querySelector('#popeye');
let idIdex=0;
let olive;

reset.addEventListener('click',function text(){
    generateNextGame(element);
    var element = document.querySelector('.oliveClass');
    clearPreviousGame(element);
   console.log(element);
    
})

function clearPreviousGame(element) {
    idIdex=0;
        
        console.log(element);
    element.parentNode.removeChild(element);
    
}

function generateNextGame(){
for (let index = 0; index < 5; index++) {
     olive = document.createElement('img');
    olive.setAttribute('src', './assets/img/olive.png');
    olive.setAttribute('id', `olive${++idIdex}`);
    olive.classList.add('oliveClass');

    let columnIndex = Math.round(Math.random() * 10);
    let rowIndex = Math.round(Math.random() * 10);

    olive.style.cssText = `
            grid-column-start: ${columnIndex};
            grid-column-end: ${columnIndex++};
            grid-row-start:${(rowIndex < 4) ? rowIndex : 1} ;
            grid-row-end:2 ${rowIndex++};
            width: 200px;
            height: 200px;
            `;
    console.log(olive);
    game.appendChild(olive);
}
}