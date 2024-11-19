let submitBtn=document.getElementById("btn");
let name=document.getElementById("userName");
let email=document.getElementById("email");
let pswd=document.getElementById("password");
submitBtn.addEventListener("click",(e=>{
    e.preventDefault()
    const namevalue=name.value
    const emailvalue=email.value
    const pswdvalue=pswd.value
    console.log(namevalue);
    localStorage.setItem("name",namevalue)
    localStorage.setItem("email",emailvalue)
    localStorage.setItem("pswd",pswdvalue)
    
    alert("signup done successfully!!!!!!")
    setTimeout(()=>{
       window.location.href="login.html" 
    },5000)
}

))


const loginBtn=document.getElementById("btn")
loginBtn.addEventListener("click",()=>{
    let namestorage=localStorage.getItem("name")
    let emailstorage=localStorage.getItem("email")
    let inputusername=document.getElementById("userName").value
    let inputuseremail=document.getElementById("email").value
    if(namestorage==inputusername && emailstorage==inputuseremail){
        alert("login done successfully")
        setTimeout(()=>{
            window.open("home.html")
        },5000)
        }
        else{
            alert("opps invalid crdentials")
        }

})
