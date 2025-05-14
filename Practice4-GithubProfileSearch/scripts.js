let userInput = document.querySelector("#userInput");
let searchBttn = document.querySelector("#searchBttn");
document.querySelector("#card").classList.add("hidden");
document.querySelector("#invalid").classList.add("hidden");
console.log("Initial state of card:", document.querySelector("#card").classList);

let userID ;
searchBttn.addEventListener("click",function(){

    if(userInput.value.trim()===""){
     alert("Enter the ID")
    }
    else{
        userID = userInput.value.trim();
        console.log(userID);
        fetch(`https://api.github.com/users/${userID}`)
         .then(response => {
         if (!response.ok) {
            document.querySelector("#invalid").classList.remove("hidden");
            throw new Error("User not found");
            
         }
         return response.json();
      })
     .then(data => {
        if(data.name){
          document.querySelector("#profileName").textContent = data.name;
        }
        else{
          document.querySelector("#profileName").textContent = data.login;
        }
      
         document.querySelector("#profileId").textContent = '@'+data.login;

         if(data.bio){
            document.querySelector("#bio").textContent = data.bio;
         }
         else{
            document.querySelector("#bio").textContent = "No bio";
         }
           document.querySelector("#followersCount").textContent = data.followers;
           document.querySelector("#followingCount").textContent = data.following;
           document.querySelector("#repos").textContent = data.public_repos;
           document.querySelector("#profileLink").setAttribute('href', data.html_url);
           document.querySelector("#profilePhoto").setAttribute('src',data.avatar_url);
           document.querySelector("#card").classList.remove("hidden");
           document.querySelector("#invalid").classList.add("hidden");

           console.log(data);
     })
     .catch(error => {
        document.querySelector("#invalid").classList.remove("hidden");
        document.querySelector("#card").classList.add("hidden");
     });
    }
    
});