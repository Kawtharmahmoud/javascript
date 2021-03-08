//Get Data From LocalStorage
let get_user=localStorage.getItem("username");
let get_email=localStorage.getItem("email");
let products=JSON.parse(localStorage.getItem("products")) || productsDB;
let myPrudcts=products.filter((item)=> item.IsMe === "Y");
let prudctslength=document.querySelector("#prudcts-length span");

let userDom2=document.getElementById("username");
let userEmailDom=document.getElementById("email");

userDom2.innerHTML=get_user;
userEmailDom.innerHTML=get_email;
if(myPrudcts.length !=0){
prudctslength.innerHTML =myPrudcts.length;}
else {
    prudctslength.remove();
}