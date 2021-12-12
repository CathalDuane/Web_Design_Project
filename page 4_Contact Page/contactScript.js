

//Cathal: Function to change HTML to show user input was succesful (Does not account for required email validation)
function validateForm() {
    let x = document.forms["contactForm"]["nameInput"].value;
    let y = document.forms["contactForm"]["emailInput"].value;
    if (x == "" || y == "") {
    }
    else if (x == "" && y == ""){
    }
    else{
        submitSuccess()
    }
  }

function submitSuccess(){
    event.preventDefault;
    document.getElementById("contactInput").innerHTML = "<h2>Thank you for your message </h2><br> We will contact you soon";    
}



    
