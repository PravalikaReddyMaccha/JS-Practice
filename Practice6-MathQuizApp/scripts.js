const questions = [

    "What is the answer of 3*8",
    "What color do you get when you mix red and yellow?",
    "Which planet is known as the Red Planet?",
    "How many legs does a spider have?",
    "What is the capital of India?",
    "What do bees make?",
    "What is 5 + 3?",
    "How many sides does a triangle have?",
    "What is 10 - 4?",
    "What is 3 × 2?"

]
const answers=[
    "24",
    "Orange",
    "Mars",
    "8",
    "New Delhi",
    "Honey",
    "8",
    "3",
    "6",
    "6"
]
document.querySelector("#question").textContent = questions[0];
let index=0;
let score = 0;
let quesIndex=1;


let submit = document.querySelector("#submit");
submit.addEventListener('click',function(){
   
   let ans = document.querySelector('#answer').value;
   if(ans.toLowerCase()==answers[index].toLowerCase()){
     score++;
     document.querySelector("#result").textContent = "Correct!!";
   }
   else{
    document.querySelector("#result").textContent = "Wrong!!"
   }
   console.log(score);
   document.querySelector('#answer').value='';
   document.querySelector('#score').textContent=`Score is ${score}`;
   index++;
  
     if(index==10){
       document.querySelector("#container").classList.add("hidden");
       document.querySelector("#results").textContent = `Your Score is ${score} !`
       return;
   }
   else{
     document.querySelector("#question").textContent = questions[index];
   }

})