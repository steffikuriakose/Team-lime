let userName=document.getElementById("txtUserName");// Get username by ID of username and stored in userName

let pwd=document.getElementById("txtPwd");// Get username by ID of pwd and stored in pwd
let form=document.querySelector("form");// ADD an event when press button


function loginvalidate()
{
    if(userName.value.trim()===""){
        onError(userName,"User Name cannot be empty");// Checking if username is empty ,If yes Display message otherwise check password
     }else if(pwd.value.trim()==="") {
        onError(pwd,"password cannot be empty");
     
      }else{
       onSuccess(pwd);// Both username and password ok submit form
       form.submit();
     }
    
}
 document.querySelector("button")//returns the first Element within the document that matches the specified selector, or group of selectors
.addEventListener("click",(event)=>{
    event.preventDefault();// prevent default stopping
    loginvalidate();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; // hide error message
    parent.classList.remove("error");// remove error 
    parent.classList.add("success");  // add success
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";// error message appear
    messageEle.innerText=message;  
    parent.classList.add("error");// add error
    parent.classList.remove("success");// remove success

}