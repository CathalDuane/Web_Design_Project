const toolbar = document.getElementById("toolbar");
const canvas = document.getElementById("drawingCanvas");



//event listener to call canvas,
//'load' sets it to start when the page opens

    //query selector matched css selectors
    
    
    // context of canvas (workspace) 2d or 3d. 
    var contextCanvas = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //Calling Toolbar



    //resizing
    

    let painting = false;

    toolbar.addEventListener('click', e =>{

        if (e.target.id === 'clear'){
            contextCanvas.clearRect(0,0, canvas.width,canvas.height);
        }
    });


   


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
        contextCanvas.lineWidth = document.getElementById("strokeWidth").value;
        contextCanvas.lineCap="round";

        //line movement
        contextCanvas .lineTo(line.clientX, line.clientY);
        contextCanvas.stroke();
        contextCanvas.beginPath();
        contextCanvas.moveTo(line.clientX,line.clientY);

        contextCanvas.stroke();
        

    }

    //mouse controls for drawing
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

  
    toolbar.addEventListener('change', e =>{

        if (e.target.id === 'strokeColour'){
            contextCanvas.strokeStyle = e.target.value;
        }
    });
    


// posible responsive
// window.addEventListener('resize', );