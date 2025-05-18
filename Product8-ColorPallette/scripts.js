let generateBttn = document.querySelector("#generate-bttn");
generateBttn.addEventListener('click',function(){
  container.innerHTML= '';
  for(let i=0;i<4;i++){
   
   let div = document.createElement("div");
   div.classList.add("color-div");
   div.id = `div${i + 1}`;
   let color = getRandomColor();  ;
   div.style.backgroundColor = color;
   let para = document.createElement("p");
   para.classList.add("para");
   para.textContent = color;
    document.querySelector("#container").appendChild(div);
    document.querySelector(`#div${i + 1}`).appendChild(para);
  
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
document.addEventListener('click',function(e){
  if(e.target.tagName==='P'&&e.target.classList.contains("para")){
    navigator.clipboard.writeText(e.target.textContent);
    alert("The color id is copied");
  }
})
