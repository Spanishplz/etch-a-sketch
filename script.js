
// screen size
const screenDiv = document.querySelector("#screenDiv");
const screen = document.querySelector("#screen");

// makes it a square
screen.style.width = `${screen.clientHeight}px`;
console.log(screen.offsetHeight);
console.log(screen.offsetWidth);
// create pixel divs

function createPixel(side) {
    const pixel = document.createElement("div");
    pixel.setAttribute("style","border: 1px solid deepskyblue; flex: 0 0 auto; ");
    // pixel.style.boxSizing = "content-box";
    // pixel.setAttribute("style","background-color: green; flex: 0 0 auto;");

    pixel.style.height = `${side}px`;
    pixel.style.width = `${side}px`;
        screen.appendChild(pixel);
    // console.log(pixel.offsetHeight);

}


// values of the screen size
let screenH = screen.clientHeight; // 500
let screenW = screen.clientWidth; // 500

// values of each square "pixel" size
// let pixelH = pixel.clientHeight;
// let pixelW = pixel.clientWidth;

// input
let squares = 16;
let total = squares*squares;
let pixelSize = screenW/squares;


for(let i =  0; i < total; i++) {
    // console.log(i);
    createPixel(pixelSize);
};

console.log(pixelSize * 16 );
