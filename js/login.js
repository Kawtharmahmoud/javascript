


let username=document.querySelector("#username");

let password=document.querySelector("#password");
let loginbtn =document.querySelector("#sign_in");
let getuser=localStorage.getItem("username");
let getpass=localStorage.getItem("password");

loginbtn.addEventListener("click",login);
function login(e){
    e.preventDefault();
    if (username.value === "" || password.value === "") {
        alert("Please Fill data");
    } else {
        if (
            getuser &&
            getuser.trim() === username.value.trim() &&
            getpass &&
           getpass=== password.value
){
    setTimeout(() =>{
        window.location="index.html";
    },500);
}
else {
    console.log("incorrect")
}


        }
        
    }

