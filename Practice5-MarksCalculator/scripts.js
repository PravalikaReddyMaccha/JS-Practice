let calculatorform = document.querySelector("#calculateForm");

function calculateMarks(){
  event.preventDefault(); 

  const cLang = parseInt(calculatorform.elements['cLang'].value);
  const java = parseInt(calculatorform.elements['java'].value);
  const dsa = parseInt(calculatorform.elements['dsa'].value);
  const oops = parseInt(calculatorform.elements['oops'].value);


  if ([cLang, java, dsa, oops].some(isNaN)) {
    alert("Please fill all fields with valid numbers.");
    return;
  }

  const marks = cLang + java + dsa + oops;
  const percentage = (marks / 400) * 100;

  document.querySelector("#results").textContent = 
    `The calculated marks are ${marks}, and percentage is ${percentage.toFixed(2)}%.`;
};
