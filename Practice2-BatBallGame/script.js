
const buttons = document.querySelectorAll('.bttn');
let userValue=0;
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
        alert('It\'s Tie');
    }
    else if(compValue===1){
        if(userValue===2){
            alert('Computer won');
        }
        else{
            alert('User won');
        }
    
    }
    else if(compValue===2){
        if(userValue===3){
            alert('Computer won');
        }
        else{
            alert('User won');
        }
    }
    else{
        if(userValue===1){
            alert('Computer won');
        }
        else{
            alert('User won');
        }
    }
}


