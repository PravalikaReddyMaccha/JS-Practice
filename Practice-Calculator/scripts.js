let str= "";
const buttons =document.querySelectorAll(".num") ;
// console.log("button value is "+button.value);
buttons.forEach(button=>{
   
    button.addEventListener("click",()=>{
        let temp = button.textContent.trim();
        str+=temp;
        document.querySelector("#inp").value = str;
        // console.log("str is"+str);
    })
})

const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click",()=>{
    const res = eval(str);
    document.querySelector("#inp").value = res;
    str="";
})
const resButton = document.querySelector("#clear");
resButton.addEventListener("click",()=>{
    document.querySelector("#inp").value = "";
    str="";
})


