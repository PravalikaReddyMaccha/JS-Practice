let passwordDiv = document.querySelector("#password");


 const slider = document.querySelector("#rangeInput");
    const display = document.querySelector("#range-label");
    
    slider.addEventListener("input", function () {
      display.textContent = `Password Length: ${slider.value}`;
});
let generatebttn = document.querySelector("#generate-bttn");
generatebttn.addEventListener('click',function(){

    let passwordLength = slider.value;
    const uppercase = document.querySelector("#uppercase");
    const numbers = document.querySelector("#numbers");
    const symbols = document.querySelector("#symbols");
    let uppercasevalue=false;
    let numbersvalue=false;
    let symbolsvalue=false;
    if(uppercase.checked){
       uppercasevalue = uppercase.value;
    }
    if(numbers.checked){
        numbersvalue = numbers.value;
    }
    if(symbols.checked){
        symbolsvalue = symbols.value;
    }
     const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
     const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     const numbersChars = '0123456789';
     const symbolsChars = '!@#$%^&*()_+[]{}|;:,.<>?';
     
     let allChars=lowercaseChars;
     if(uppercasevalue){
         allChars = allChars + uppercaseChars;
     }
     if(numbersvalue){
         allChars = allChars+numbersChars;
     }
     if(symbolsvalue){
        allChars = allChars+symbolsChars;
     }
    let val = generatePassword(passwordLength,allChars);
    passwordDiv.textContent = val;
     
})
function generatePassword(passwordLength,allChars){
   let password='';
   for (let i = 0; i < passwordLength; i++) {
    const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    password += randomChar;
  }
  return password;
}