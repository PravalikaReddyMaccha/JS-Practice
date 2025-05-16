let allProducts = [];

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data =>{
    allProducts = data
    displayProducts(data)
  }
  )
  .catch(error => console.error('Error:', error));

function displayProducts(data){
    console.log
   
container.innerHTML = ''; 
  if(data.length===0){
        document.querySelector('#container').innerHTML += `
         <div id="invalid">
         <h1>Products Not found!</h1>
         </div>
        `;
    } 
    else{
    data.forEach((arr)=>{
        
        document.querySelector('#container').innerHTML += `
        
        <div id="cart">
            <img id="prodImage" src="${arr.image}" alt="image">
            <div id="productDetails">
                <h3 id="productName">${arr.title}</h3>
                <p id="prodDesc">${arr.description}</p>
                <div id="price-div"><button id="price-bttn">${arr.price}$</button></div>
            </div>
        </div>
        `
}
)
    }
}
let input = document.querySelector("#search");

input.addEventListener('keydown',function(event){
        if (event.key === 'Enter'){
           let inputValue = input.value.toLowerCase();
            if (inputValue === '') {
              displayProducts(allProducts);
           } 
       else{
           let filteredProducts = allProducts.filter(product=>{
              return (product.title.toLowerCase().includes(inputValue)||product.description.toLowerCase().includes(inputValue)||product.category.toLowerCase().includes(inputValue))
           });
        
           displayProducts(filteredProducts);
        
        }
    }
})