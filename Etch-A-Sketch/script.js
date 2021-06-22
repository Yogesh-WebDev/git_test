const display = document.querySelector('#container');
let input;
const btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    input = prompt("Enter grid size");

    generateGride(Number(input));
});
function generateGride(input) {

    display.style.cssText = `
        display: grid;
        grid-template-columns: repeat(${input}, 1fr);
        grid-template-rows: repeat(${input}, 1fr);
        grid-auto-flow: dense;
        grid-auto-rows: 1fr;
         background-color: black;
         height: 960px;
        width: 960px;
        `;

    for (let indexRow = 1; indexRow < input + 1; indexRow++) {
        for (let indexColumn = 1; indexColumn < input + 1; indexColumn++) {
            const divOver = document.createElement('div');
            divOver.classList.add('square');
            divOver.style.cssText = `
                grid-column-start:${indexColumn} ;
                grid-column-end: ${indexColumn + 1};
                grid-row-start: ${indexRow};
                grid-row-end: ${indexRow + 1};
                
        `;
            display.appendChild(divOver);
        }
    }
    addListner();
}
function addListner() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener("mouseenter", function (e) {
            e.target.style.backgroundColor = 'white';
            //console.log(e.target);
        })
    });
}
