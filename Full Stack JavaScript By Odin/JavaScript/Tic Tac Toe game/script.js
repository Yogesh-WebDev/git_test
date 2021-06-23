

const GameBoard=(() =>{

})();


const playGame=(() =>{
    let playerInput=[];
    const buttonElm=document.querySelectorAll('.btn');
   const init= ()=>{
        
   }; 


   const getValue=(player)=>{
    buttonElm.forEach(butnElm=>butnElm.addEventListener('click',function (e) {
        savePlayerOption(e.target.value,player);
     }));
   };

   const savePlayerOption=(value,player)=>{
        playerInput.push({name : player,option:value});

        console.log(playerInput);
        
   };

   return{
        init,
        getValue
   };
})();

playGame.init();
playGame.getValue('ram');