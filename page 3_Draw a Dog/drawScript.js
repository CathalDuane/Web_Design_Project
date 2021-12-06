const toolbar = document.getElementById("toolbar");
const canvas = document.getElementById("drawingCanvas");

// context of canvas (workspace) 2d or 3d. 
const ctx = canvas.getContext("2d");

var rect = canvas.getBoundingClientRect();
canvas.width = rect.width;
canvas.height = rect.height;

 //Attempt to adjust for change in cooredinates after scrolling
// var x=line.clientX-rect.left;
// var y=line.clientY-rect.top;


//Calling clear button 
document.getElementById('clearButton').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, false);

//get value from colour picker
toolbar.addEventListener('change', e =>{

    if (e.target.id === 'strokeColour'){
        ctx.strokeStyle = e.target.value;
    }   
});

    //----------drawing functions and event Listeners--------------

    //function to determine start position based on mouse position
let painting = false;

function startPosition(line){
    painting = true;
    draw(line);
}

//function to determine end position based on mouse position
function finishedPosition(){
    painting = false;
    ctx.beginPath();
}

//function for actual drawing
function draw(line){
    if(!painting)return;
        
// line style when mouse pressed and moving
    ctx.lineWidth = document.getElementById("strokeWidth").value;
    ctx.lineCap="round";

//line movement

    //Client x and client y are coordinates of users mouse. This needs to be offset to align mouse and line.
    var mouseX = line.clientX - ctx.canvas.offsetLeft;
    var mouseY = line.clientY - ctx.canvas.offsetTop;

    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY); 
    
    //show current coordinates of cursor
    var status = document.getElementById('status');
    status.innerHTML = mouseX +"|" +mouseY;
}

//mouse controls for drawing
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);

//Touch controls for drawing
//Touchstart event/function
canvas.addEventListener("touchstart", startPosition);
canvas.addEventListener("touchend", finishedPosition);
canvas.addEventListener("touchmove", draw);


    
    
  


