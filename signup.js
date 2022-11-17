let userName=document.getElementById("txtUserName");//Get username by ID of username and stored in userName
let email=document.getElementById("txtEmail");// Get email by ID of email and stored in email
let pwd=document.getElementById("txtPwd");// Get pwd by ID of pwd and stored in pwd
let conPwd=document.getElementById("txtConPwd");// Get pwd by ID of conpwd and stored in conpwd
let form=document.querySelector("form");

function validateInput()
{
    //check username is empty 
    if(userName.value.trim()==="")// Check user name is empty or not
        {
          onError(userName,"User Name cannot be empty");
        }
        
   
            else if(email.value.trim()==="")// Check email is empty or not
                {
                    hide(userName);
                  onError(email,"Email cannot be empty");
                } 
                    else if(!isValidEmail(email.value.trim()))// check format of email is correct or not
                        {
                          onError(email,"Email is not valid");
                        }   
​
    
                        else if(pwd.value.trim()==="")// Check pwd is empty or not
                            {
                               onError(pwd,"password cannot be empty");
                             }
         
                            else if(conPwd.value.trim()==="")// Check pwd is empty or not
                                {
                                  onError(conPwd,"password cannot be empty");
                                }
                                  else if(pwd.value.trim()!==conPwd.value.trim())// Check pwd=conpwd
                                 {
                                      onError(conPwd,"Password & Confirm password not matching");
                                     }
                                         else
                                            {
                                                onSuccess(conPwd);// If everything is correct submit form
                                                form.submit();
                                            }
     
}
​
document.querySelector("button")// ADD an event on clicking button
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput(); // Go to validate function
});
// Actions when each field is correct
function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success"); 
    form.submit();
}
// Actions during an wrong entry
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");
}
// Checking email format is correct
function isValidEmail(email)
{
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function hide(input)
{
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";   
}
