status1 = "";
img="";
objects = [];
function preload()
{
    img = loadImage('fruitb.jpg');
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    document.getElementById("status").innerHTML="status: detecting objects";
    od = ml5.objectDetector("cocossd", modelloaded);
}
function draw()
{
    image(img, 0, 0, 640, 420);
    
}
function modelloaded()
{
    console.log("ModelLoaded!");
    status1 = true;
}
function gotResult(error, results)
{
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
