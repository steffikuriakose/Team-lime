let current_cons=document.getElementById("current_cons");

let avg_cons=document.getElementById("avg_cons");
let upper_limit=400;
let form=document.querySelector("form");


function compare()
{
    if(current_cons.value.trim()===""){
        onError(current_cons,"Current consuption cannot be empty");
     }else if(avg_cons.value.trim()==="") {
        onError(avg_cons,"Average consumption cannot be empty");
     
      }else if (current_cons.value>upper_limit)
       {alert("Gives Red warning! Switch Off Please");
       form.submit();}
       else if  (current_cons.value>=avg_cons.value) 
       {alert(" Amber warning!");
        form.submit()}
       else (current_cons.value<avg_cons.value)
       {
       alert(" Green! All OK");
       form.submit();}
      
}
 document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();// prevent default stopping
    compare();
});



function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";// error message appear
    messageEle.innerText=message;  
    parent.classList.add("error");// add error
    parent.classList.remove("success");// remove success

}