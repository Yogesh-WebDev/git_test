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
    var elementDiv = document.querySelector('#btnDiv');
    
    elements.forEach(element => {
        element.parentNode.removeChild(element);
    });

    clearPreviousGame();



};
function getDataOfPosition() {
    const positionElm = document.querySelector('.popeyeCls');
    const oliveEle=document.querySelectorAll('.oliveClass');
    popeye.setAttribute('src','./assets/img/popeye-walking.png');
    oliveEle.forEach(element =>{
        console.log();
        if (positionElm.offsetTop===element.offsetTop && positionElm.offsetLeft===element.offsetLeft && element.getAttribute("alt")==='original') {
            positionElm.setAttribute('src','./assets/img/popeye-win.png');
        }
    })

};
function moveUp() {
    popeye.style.cssText = `
        grid-column-start: ${(getComputedStyle(popeye).gridColumnStart)};
        grid-column-end: ${(getComputedStyle(popeye).gridColumnEnd)};
        grid-row-start:${((getComputedStyle(popeye).gridRowStart) - 1) < 1 ? 3 : (getComputedStyle(popeye).gridRowStart) - 1} ;
        grid-row-end:${((getComputedStyle(popeye).gridRowEnd) - 1) < 2 ? 4 : (getComputedStyle(popeye).gridRowEnd) - 1} ;
       
        `;
    getDataOfPosition();
}
function moveDown() {
    popeye.style.cssText = `
    grid-column-start: ${(getComputedStyle(popeye).gridColumnStart)};
    grid-column-end: ${(getComputedStyle(popeye).gridColumnEnd)};
    grid-row-start:${(Number(getComputedStyle(popeye).gridRowStart) + 1) > 3 ? 1 : Number(getComputedStyle(popeye).gridRowStart) + 1} ;
    grid-row-end:${(Number(getComputedStyle(popeye).gridRowEnd) + 1) > 4 ? 2 : Number(getComputedStyle(popeye).gridRowEnd) + 1}  ;
    
    
    `;
    getDataOfPosition();
}
function moveRight() {
    popeye.style.cssText = `
        grid-column-start: ${(Number(getComputedStyle(popeye).gridColumnStart) + 1) > 6 ? 1 : Number(getComputedStyle(popeye).gridColumnStart) + 1};
        grid-column-end: ${(Number(getComputedStyle(popeye).gridColumnEnd) + 1) > 7 ? 2 : Number(getComputedStyle(popeye).gridColumnEnd) + 1};
        grid-row-start:${(getComputedStyle(popeye).gridRowStart)} ;
        grid-row-end:${(getComputedStyle(popeye).gridRowEnd)} ;

        
        `;
        getDataOfPosition();
}

function moveLeft() {
    popeye.style.cssText = `
        grid-column-start: ${((getComputedStyle(popeye).gridColumnStart) - 1) < 1 ? 6 : (getComputedStyle(popeye).gridColumnStart) - 1};
        grid-column-end: ${((getComputedStyle(popeye).gridColumnEnd) - 1) < 2 ? 7 : (getComputedStyle(popeye).gridColumnEnd) - 1};
        grid-row-start:${(getComputedStyle(popeye).gridRowStart)} ;
        grid-row-end:${(getComputedStyle(popeye).gridRowEnd)} ;
        
        
        `;
        getDataOfPosition();
}
function startToPlay() {
    generateNextGame();
    document.addEventListener('keydown', function(e) {
        switch (e.keyCode) {
            case 37:
                moveLeft();
                break;
            case 38:
               moveUp();
                break;
            case 39:
                moveRight();
                break;
            case 40:
                moveDown();
                break;
        }
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
        if (index === 3) {
            olive.setAttribute('alt', `original`);
        }

        let columnIndex = getRandomIntInclusive(1, 6);
        let rowIndex = getRandomIntInclusive(1, 3);


        olive.style.cssText = `
            grid-column-start: ${columnIndex};
            grid-column-end: ${columnIndex++};
            grid-row-start:${rowIndex} ;
            grid-row-end:2 ${rowIndex++};

            width: 200px;
            height: 200px;
            
            
            `;
        console.log(olive);
        game.appendChild(olive);



    }
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}