let product={
    name:'Jeans',
    size:'S',
    fit:'Slim Fit',
};
let prod1={
    name:'Frock',
    size:'S',
    color:'red',
    'delivery-time':'2nd August',
}
let prod3={
    name:'Frock',
    size:'S',
    color:'red',
    'delivery-time':'2nd August',
}
console.log(prod1.name);
let prod2 = prod1;
prod2.name='Anarkali';
console.log(prod2.name+" "+prod1.name);
prod1.name='T-Shirt',
console.log(prod2.name+" "+prod1.name);
console.log(prod1['delivery-time']);

let mssge={
     message:'good-job',
     status:'complete',
}
let {message,status} = mssge;
console.log(message+" "+status);

function isIdenticalProduct(prod1,prod2){
    if(typeof prod1!=='object'||typeof prod2!='object'){
        console.warn('Parameter passed was not an object');
        return false;
    }

    if(prod1==prod2){
        return true;
    }
   
   return false;
}
console.log(isIdenticalProduct(prod1,prod3));

