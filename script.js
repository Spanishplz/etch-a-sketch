
// screen size
const screenDiv = document.querySelector("#screenDiv");
const screen = document.querySelector("#screen");

// makes it a square
screen.style.width = `${screen.offsetHeight}px`;

// create pixel divs
const pixel = document.createElement("div");
pixel.setAttribute("style","border: 1px solid deepskyblue; min-height: 20px; min-width: 20px; flex: 0 0 auto;");
screen.appendChild(pixel);

// values of the screen size
let screenH = screen.offsetHeight; // 500
let screenW = screen.offsetWidth; // 500

// values of each square "pixel" size
let pixelH = pixel.offsetHeight;
let pixelW = pixel.offsetWidth;

// input
let squares = 16;

let pixelSize = screenW/squares;
console.log(pixelSize);

for(let i =  0; i < squares; i++) {
    
};
