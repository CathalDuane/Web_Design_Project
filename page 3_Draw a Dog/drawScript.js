const toolbar = document.getElementById("toolbar");
const canvas = document.getElementById("drawingCanvas");



// context of canvas (workspace) 2d or 3d. 
const contextCanvas = canvas.getContext("2d");

// const canvasOffsetx = canvas.offsetLeft;
// const canvasOffsety = canvas.offsetTop;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//Calling clear button 


document.getElementById('clearButton').addEventListener('click', function() {
    contextCanvas.clearRect(0, 0, canvas.width, canvas.height);
  }, false);



//get value from colour picker
toolbar.addEventListener('change', e =>{

    if (e.target.id === 'strokeColour'){
        contextCanvas.strokeStyle = e.target.value;
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
    contextCanvas.beginPath();
}

//function for actual drawing
function draw(line){
    if(!painting)return;
        
// line style when mouse pressed and moving
    contextCanvas.lineWidth = document.getElementById("strokeWidth").value;
    contextCanvas.lineCap="round";

//line movement
    contextCanvas .lineTo(line.clientX, line.clientY);
    contextCanvas.stroke();
    contextCanvas.beginPath();
    contextCanvas.moveTo(line.clientX,line.clientY);       
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


    
    
  


