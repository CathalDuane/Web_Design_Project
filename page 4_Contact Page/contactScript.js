let messageList = [];

//function to add message to list and push to console
function addMessage(){
    //stop default action
    event.preventDefault();  
    
    //input data into let message
    let message = {
        //pulling data from inputs
        id: Date.now(),
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        year: document.getElementById('message').value
    }

    //push message to messageList arrauy
    messageList.push(message);
    document.forms[0].reset();

    console.warn('added' , {messageList} );  
}           

//saving to localStorage
//JSON String to transmit data to different places eg. server to client
localStorage.setItem('userMessageList', JSON.stringify(messageList));
    
//button event listener
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('submitBtn').addEventListener('click', addMessage);
});
