let addBttn = document.querySelector('#add');
let activity = document.querySelector('#act-input');
let date = document.querySelector('#date-input');
const arr=[];
addBttn.addEventListener("click",function(e){
    const tableBody = document.querySelector('#tableBody');
    tableBody.innerHTML = '';
    let activitytext = activity.value;
    let datetext = new Date(date.value);

    const day = String(datetext.getDate()).padStart(2, '0');  
    const month = String(datetext.getMonth() + 1).padStart(2, '0'); 
    const year = datetext.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    const myButton = document.createElement('button');
    myButton.textContent = 'Delete';
    myButton.className = 'bttn';
     const obj = {
        act : activitytext,
        dat : formattedDate,
        button : myButton,
     }
     arr.push(obj);
     console.log(arr);
     activity.value = '';
     date.value='';
     arr.forEach((act,index)=>{
         console.log(act.act+" "+act.dat+" "+act.button);
         
         const row = document.createElement('tr');
         const td1 = document.createElement('td');
         const div1 = document.createElement('div');
         div1.textContent = act.act;
         div1.className = 'activity';
         td1.appendChild(div1);

         const td2 = document.createElement('td');
         const div2 = document.createElement('div');
         div2.textContent = act.dat;
         div2.className='dateClass';
         td2.appendChild(div2);

         const td3 = document.createElement('td');
         const div3 = document.createElement('div');
         div3.appendChild(act.button);
         td3.appendChild(div3);
         act.button.addEventListener('click', function () {
            arr.splice(index, 1);         
            row.remove();                  
          });

         row.appendChild(td1);
         row.appendChild(td2);
         row.appendChild(td3);
         tableBody.appendChild(row);
         
     });

})