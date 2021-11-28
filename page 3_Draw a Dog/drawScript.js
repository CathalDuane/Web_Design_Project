const toolbar = document.getElementById('toolbar');
const canvas = document.getElementById('drawingCanvas');

// context of canvas (workspace) 2d or 3d. 
const ctx = canvas.getContext('2d');

//offsetting canvas from side and top
const canvasOffsetx = canvas.offsetLeft;
const canvasOffsety = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetx;
canvas.height = window.innerHeight - canvasOffsety;

//vars for drawing
let isPainting = false;
let lineWidth = 5;

//vars to store start position of drawing
let startX;
let startY;

toolbar.addEventListener('click', e=>{
    //=== is used for comparing two variables, but this operator also checks datatype and compares two values.
    if (e.target.id === 'clear'){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e =>{
    //get value on colour picker
    if(e.target.id === 'stroke'){
        ctx.strokeStyle = e.target.value;
    }

    //get value on stroke width picker
    if(e.target.id === 'strokeWidth'){
        lineWidth = e.target.value;
    }
});

const draw = (e) => {
    if (!isPainting){
        return;
    }
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetx ,e.clientY);
    ctx.stroke();
}
//mouse controls for drawing
    canvas.addEventListener("mousedown", (e) =>{
        //when mouse clicked boolean isPainting changes to true
        isPainting = true
        //clientX property returns the horizontal coordinate of the mouse pointer when a mouse is clicked
        startX = e.clientX;
        startY = e.clientY;
    });
    canvas.addEventListener("mouseup", e =>{
        isPainting = false;
        //
        ctx.stroke();
        // beginPath closes path that user draws
        ctx.beginPath();


    });

    canvas.addEventListener("mousemove", draw);


    // // //Touch controls for drawing
    // canvas.addEventListener("touchstart", startPosition);
    // canvas.addEventListener("touchend", finishedPosition);
    // canvas.addEventListener("touchmove", draw);





// //event listener to call canvas,

    

//     //Resize
//     // var heightRatio = 1.5;
//     // canvas.height = window * heightRatio;
    
//     let painting = false;

//     toolbar.addEventListener('click', e =>{

//         if (e.target.id === 'clear'){
//             contextCanvas.clearRect(0,0, canvas.width,canvas.height);
//         }
//     });


   


//     //function to determine start position based on mouse position
//     function startPosition(line){
//         painting = true;
//         draw(line);

//     }

//     //function to determine end position based on mouse position
//     function finishedPosition(){
//         painting = false;
//         contextCanvas.beginPath();
//     }

//     //function for actual drawing
//     function draw(line){
//         if(!painting)return;
        
//         // line style when mouse pressed and moving
//         contextCanvas.lineWidth = document.getElementById("strokeWidth").value;
//         contextCanvas.lineCap="round";

//         //line movement
//         contextCanvas .lineTo(line.clientX, line.clientY);
//         contextCanvas.stroke();
//         contextCanvas.beginPath();
//         contextCanvas.moveTo(line.clientX,line.clientY);

//         contextCanvas.stroke();
        

//     }

//     //mouse controls for drawing
//     // canvas.addEventListener("mousedown", startPosition);
//     // canvas.addEventListener("mouseup", finishedPosition);
//     // canvas.addEventListener("mousemove", draw);

//     // //Touch controls for drawing
//     // canvas.addEventListener("touchstart", startPosition);
//     // canvas.addEventListener("touchend", finishedPosition);
//     // canvas.addEventListener("touchmove", draw);

  
//     toolbar.addEventListener('change', e =>{

//         if (e.target.id === 'strokeColour'){
//             contextCanvas.strokeStyle = e.target.value;
//         }
//     });
    


// // posible responsive
// // window.addEventListener('resize', );