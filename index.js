
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const boundary = document.getElementById("boundary");

let width;
let height;
refreshSize();

canvas.width = width;
canvas.height = height;

let mouse = {
  x: width / 2,
  y: height / 2,
};


const colors = ["#1A1A23", "#E86262", "#92ABEA"];

addEventListener("mousemove", (event)=> {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    
})

function refreshSize() {
    width = boundary.offsetWidth;
    height = boundary.offsetHeight;
}

function animate() {
    refreshSize();

    requestAnimationFrame(animate);
    c.fillStyle = colors[0];
    c.fillRect(0, 0, width, height);

    if ( 
        mouse.x + 100 >= width / 2 - 50 &&
        mouse.x <= width / 2 - 50 + 100 &&
        mouse.y + 100 >= height / 2 - 50 &&
        mouse.y <= height / 2 - 50 + 100 
    ) {
        console.log("Colliding");
    }


    c.fillStyle = colors[1];
    c.fillRect(mouse.x, mouse.y, 100, 100);

    c.fillStyle = colors[2];
    c.fillRect(width/ 2 - 50, height / 2 - 50, 100, 100);
}


animate();


// canvas only updates on reload


