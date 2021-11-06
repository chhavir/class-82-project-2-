canvas= document.getElementById("canvas-1");
ctx= canvas.getContext("2d");

color= "red";
mylineWidth= 2 ;
radius= 30;

var mouseEvent= "empty";


canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e)
{
   // color= document.getElementById("color").value;
   // mylineWidth= document.getElementById("width_of_line").value;
    //radius= document.getElementById("radius").value;
    mouseEvent= "mouseDown";
}
canvas.addEventListener("mousemove" , mymousemove)
function mymousemove(e)
{
    mouse_x= e.clientX-canvas.offsetLeft;
    mouse_y= e.clientY-canvas.offsetTop;
    if(mouseEvent== "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= mylineWidth;
        ctx.arc(mouse_x, mouse_y, radius, 0, 2 * Math.PI);     
        ctx.stroke(); 
    } 
}

canvas.addEventListener("mouseup" , mymouseup)
canvas.addEventListener("mouseleave" , mymouseleave)
function mymouseup(e)
{
    mouseEvent= "mouseup";
}

function mymouseleave(e)
{
    mouseEvent= "mouseleave";
}



function clear_area()
{
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
}