let generateBttn = document.querySelector("#generate-bttn");
generateBttn.addEventListener('click',function(){
  container.innerHTML= '';
  for(let i=0;i<4;i++){
   
   let div = document.createElement("div");
   div.classList.add("color-div");
   div.style.backgroundColor = getRandomColor(); 
   document.querySelector("#container").appendChild(div);
   
}
function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}
})
