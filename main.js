canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverX=10;
roverY=10;
roverW=70;
roverH=70;
background_image="mars.jpg";
rover_image="rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, roverX, roverY, roverW, roverH);
}