let container= document.querySelector(".kevin")

window.addEventListener("load",()=> {
    container.style.display = "none"
});

let body = document.body
let toggle = document.querySelector(".toggle");
let icon = document.querySelector(".fa-moon");
let iconB = document.querySelector(".dark");


toggle.addEventListener("click", ()=> {
    body.classList.contains("dark")
    if(body.classList.toggle("dark")) {
        icon.classList.replace("fa-moon", "fa-sun");
   } else {
       icon.classList.replace("fa-moon", "fa-sun");
   }
});




let icons = document.querySelector(".shower")
let change = document.querySelector(".show");
let changeB = document.querySelector(".grab");

change.addEventListener("click", ()=>{
change.classlist.toggle("shower")
if(changeB.type ==="password"){
    changeB.type = "text";
} else{
    changeB.type = "password";
};
});
