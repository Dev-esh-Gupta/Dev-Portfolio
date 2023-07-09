var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function clearErrors(){
    errors = document.getElementsByClassName('validity-check');
    for(let item of errors){
        item.innerHTML = "";
    }
}

function seterror(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName('validity-check')[0].innerHTML = error;
}

function validity_check(){
    var returnval = true;
    clearErrors();

    var name = document.forms['myForm']['Name'].value;
    if(name.length == 0){
        seterror("Name","*Length of name cannot be zero!");
        returnval = false;
    }else if(name.length < 3){
        seterror("Name", "*Length of a name should be between 2 to 15 character");
        returnval = false;
    }else if(name.length > 14){
        seterror("Name","*Length of name exceed 14 character");
        returnval = false;
    }
    
    var email = document.forms['myForm']['Email'].value;
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        seterror("Email","*Invalid Email Entered, Please Enter valid eamil");
        returnval = false;
    }
    
    
    var message = document.forms['myForm']['Message'].value;
    if(message.length < 5){
        seterror("Message","*Please Enter Message in atleast 5 character");
        returnval = false;
    }else if(message.length > 100){
        seterror("Message","*You are not allowed to write message in more than 100 character");
        returnval = false;
    }
    
    if(returnval){
        const form = document.forms['myForm'];
        const msg = document.getElementById("msg");
        msg.innerHTML = "Message Sent Successfully!";
        setTimeout(function(){
            msg.innerHTML = "";
            form.reset();
        },5000)
    
        // form.reset();
        // name.value = "";
        // email.value = "";
        // message.value = "";

    }
    return returnval;
}

// function FReset(){
//     alert("Hello");
//     document.forms['myForm'].reset();
// }
