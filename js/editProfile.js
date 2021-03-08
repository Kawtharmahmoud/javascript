//Get Data From LocalStorage
let get_user=localStorage.getItem("username");
let get_email=localStorage.getItem("email");
 
//let prudctslength=document.querySelector("#prudcts-length span");
let EditForm=document.getElementById("edit-profile-form");
let userInput=document.getElementById("changename");
let userEmailInput=document.getElementById("changeemail");

userInput.value=get_user;
userEmailInput.value=get_email;

EditForm.addEventListener('submit',editProfileData);


function editProfileData(e){
e.preventDefault();
localStorage.setItem("username",userInput.value);
localStorage.setItem("email",userEmailInput.value);
setTimeout(() =>{
    window.location="profile.html";
},500);
}
