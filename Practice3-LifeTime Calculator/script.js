let settings = document.querySelector('#settingIcon');
let date = document.querySelector("#bttn");
let currentdate = new Date().toLocaleString();
let currentTime = new Date().toLocaleTimeString();
let value;
document.querySelector("#date").classList.add("hidden");
document.querySelector("#bttn").classList.add("hidden");
let selectedDate;

let cont = document.querySelector(".container");
    
    const table = document.createElement("table");
    table.id = "myTable";
    for (let row = 0; row < 2; row++) {
      const tr = document.createElement("tr");
      tr.id=`table-row${row}`
      for (let col = 0; col <=5; col++) {
        const td = document.createElement("td");
        // td.textContent = `Row ${row + 1}, Col ${col + 1}`;
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    cont.append(table);
  

date.addEventListener('click',function(){
    document.querySelector("#heading h1").textContent = "How much Life you lived till Date";
    let dateValue = document.querySelector('#date');
     
    if(!dateValue.value){
        alert('Please Select a Date');
    }
    else{
         selectedDate = new Date(dateValue.value);  

        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth() + 1; 
        const day = selectedDate.getDate();
      
        
         console.log(`Year: ${year}`);
         console.log(`Month: ${month}`);
         console.log(`Date: ${day}`);
   
    }
    let time = ["Years","Months","Days","Hours","Minutes","Seconds"]
    // let cont = document.querySelector(".container");
    // document.querySelector("#heading h1").textContent = "How much Life you lived till Date";
    // const table = document.createElement("table");
    // table.id = "myTable";
    // for (let row = 0; row < 2; row++) {
    //   const tr = document.createElement("tr");
    //   for (let col = 0; col <=5; col++) {
    //     const td = document.createElement("td");
    //     // td.textContent = `Row ${row + 1}, Col ${col + 1}`;
    //     tr.appendChild(td);
    //   }
    //   table.appendChild(tr);
    // }
    // cont.append(table);
    const rows = document.querySelector("#myTable").rows;
    // console.log(rows);
   
    for(let col=0;col<=5;col++){
        rows[1].cells[col].textContent = time[col];
    }

    setInterval(()=>{
        const [years,month,days,hours,minutes,seconds] = calculateAge(selectedDate);
        const ageParts = [years,month,days,hours,minutes,seconds];
        for(let col=0;col<=5;col++){
            rows[0].cells[col].textContent = ageParts[col];
        }
    },10);
    
});
settings.addEventListener('click',function(){

    document.querySelector("#date").classList.toggle("hidden");
    document.querySelector("#bttn").classList.toggle("hidden");
})

function calculateAge(dob) {
    const now = new Date();
    const diff = now - dob;
    const ageDate = new Date(diff); // Time difference in milliseconds
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return [years,months,days,hours,minutes,seconds];
    // return `${years} ${months} ${days} ${hours} ${minutes} ${seconds}`;
  }

