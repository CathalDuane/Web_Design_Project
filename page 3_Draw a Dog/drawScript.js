
//event listener to call canvas,
//'load' sets itstat when the page opens
addEventListener('load',  function() {
    //query selector matched css selectors
    const canvas = document.querySelector("#drawingCanvas");
    // context of canvas (workspace) 2d or 3d. 
    var contextCanvas = canvas.getContext("2d");


    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //Below creating shapes, adjusting colour,sroke fill,etc//
    // contextCanvas.strokeStyle = "red";
    // contextCanvas.lineWidth = 5;
    // contextCanvas.strokeRect(50,50,200,200);


    //Drawing a line ///
    // contextCanvas.beginPath();
    // contextCanvas.moveTo(100,100);
    // contextCanvas.lineTo(200,100);
    // contextCanvas.lineTo(200,150);
    // contextCanvas.closePath();
    // contextCanvas.stroke();

    let painting = false;

    //function to determine start position based on mouse position
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
        contextCanvas.lineWidth = 10;
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
    
});

// posible responsive
// window.addEventListener('resize', );