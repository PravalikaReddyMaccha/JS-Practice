
let storedScore = localStorage.getItem('score');
let gameObject1;
resetFunction(storedScore);
const buttons = document.querySelectorAll('.bttn');
let userValue=0;

function resetFunction(storedScore){
    localStorage.clear();
   gameObject1 = JSON.parse(storedScore)||{
        win:0,
        loss:0,
        tie:0,
    };
}
let gameObject = gameObject1;
buttons.forEach(bttn=>{

    bttn.addEventListener('click', function(){
    const userChoice = bttn.textContent;
    const compValue = Math.floor(Math.random() * 3) + 1;
    console.log(userChoice+" "+compValue);
    if(userChoice==='Bat'){
       userValue=1;
     }
    else if(userChoice==='Ball'){
        userValue=2;
    }
    else{
        userValue=3;
    }
    playGame(compValue,userValue);
});
})
function playGame(compValue,userValue){
    if(compValue===userValue){
        gameObject.tie++;
        alert('It\'s Tie\n'+"No. of wins : "+gameObject.win+" "+" No.of losses: "+" "+gameObject.loss+" No. of ties: "+" "+gameObject.tie);
    }
    else if(compValue===1){
        if(userValue===2){
            gameObject.loss++;
            alert('Computer won\n'+"No. of wins : "+gameObject.win+" "+" No.of losses: "+" "+gameObject.loss+" No. of ties: "+" "+gameObject.tie);
        }
        else{
            gameObject.win++;
            alert('User won\n'+"No. of wins : "+gameObject.win+" "+" No.of losses: "+" "+gameObject.loss+" No. of ties: "+" "+gameObject.tie);
        }
    
    }
    else if(compValue===2){
        if(userValue===3){
            gameObject.loss++;
            alert('Computer won\n'+"No. of wins : "+gameObject.win+" "+" No.of losses : "+" "+gameObject.loss+" No. of ties: "+" "+gameObject.tie);
        }
        else{
            gameObject.win++;
            alert('User won\n'+"No. of wins : "+gameObject.win+" "+" No.of losses: "+" "+gameObject.loss+" No. of ties: "+" "+gameObject.tie);
        }
    }
    else{
        if(userValue===1){
            gameObject.loss++;
            alert('Computer won\n'+" No. of wins : "+gameObject.win+" "+" No.of losses: "+" "+gameObject.loss+" No. of ties: "+" "+gameObject.tie);
        }
        else{
            gameObject.win++;
            alert('User won\n'+"No. of wins : "+gameObject.win+" "+" No.of losses :"+" "+gameObject.loss+" No. of ties: "+" "+gameObject.tie);
        }
    }
    localStorage.setItem("score",JSON.stringify(gameObject));
}
let reset = document.querySelector('#reset');
reset.addEventListener('click',function(){
    localStorage.clear();
    // resetFunction(storedScore);
    score={
        win:    0,
        lost:0,
        tie:0,
    }
})

