const display=document.querySelector('#container');
display.addEventListener("mouseover",function (e) {
    e.target.style.color = "white";
})
const divOver=document.createElement('div');
divOver.classList.add('square');

for (let indexRow = 1; indexRow < 17; indexRow++) {
    for (let indexColumn = 1; indexColumn < 17; indexColumn++) {
        divOver.style.cssText=`
                grid-column-start:${indexColumn} ;
                grid-column-end: ${indexColumn++};
                grid-row-start: ${indexRow};
                grid-row-end: ${indexRow++};
        `;
        display.appendChild(divOver);
    }
    
}

