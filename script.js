// screen size
const screenDiv = document.querySelector("#screenDiv");
const screen = document.querySelector("#screen");

// makes it a square
screen.style.width = `${screen.clientHeight}px`;
screen.addEventListener("mouseover", mouseOver);


function mouseOver(event){
    let target = event.target;
    
        if (target.parentNode.id === "screen"){
            if (colorButton.textContent === "color"  &&
                !target.style.backgroundColor) {
                target.style.backgroundColor = "black";
            }
            else if (colorButton.textContent === "b/w" &&
                     !target.style.backgroundColor) {
                target.style.backgroundColor = `rgb(${rgbRandom()}, ${rgbRandom()}, ${rgbRandom()})`;
            }
            let opacity = +target.style.opacity;
            if (opacity < 1) {
                opacity += 0.2;
                target.style.opacity = `${opacity}`; 
            }
    }
}


// values of the screen size
let screenH = screen.clientHeight; // 500
let screenW = screen.clientWidth; // 500


// loading page values

let squares = 50;
let total = squares*squares;
let pixelSize = screenW/squares;
createPixels(squares);

function  createPixels(squares) {
    let total = squares*squares;
    let pixelSize = screenW/squares;
    for(let i =  0; i < total; i++) {
        // console.log(i);
        createPixel(pixelSize);
    };
}


// create pixel divs

function createPixel(side) {
    const pixel = document.createElement("div");
    pixel.setAttribute("style"," flex: 0 0 auto;");
    // pixel.style.transitionProperty = "background-color";
    // pixel.style.transitionDuration = "0s";
    pixel.style.opacity = "0";
    pixel.classList.add("pixel");
    pixel.style.height = `${side}px`;
    pixel.style.width = `${side}px`;
    screen.appendChild(pixel);
}

// clear button
const clearButton = document.querySelector("#clear");


clearButton.addEventListener("click", (event) => {
    resetBackgrounds();
});

function resetBackgrounds() {
    let  allPixels = document.querySelectorAll("#screen div");
    allPixels.forEach((pixel) => {
        pixel.style.backgroundColor = "";
        pixel.style.opacity = 0;
        // pixel.classList.remove("coloring");
    });
}

// button for the size of the canvas
const sizeButton = document.querySelector("#size");
sizeButton.addEventListener("click", (e) => {
    let size = 0;
    let sizeNumber = 0;
    do {
        size = prompt("Please, write a number between 1-100", "50");
        sizeNumber = +size;
    } while(isNaN(sizeNumber) || sizeNumber < 1 || sizeNumber > 100)

    // amount of pixels
    let pixelAmount = document.querySelectorAll("#screen div");
    // remove elements
    pixelAmount.forEach((pixel) => {
        pixel.remove();
    });
    sizeButton.textContent = `size ${sizeNumber}x${sizeNumber}`;
    createPixels(sizeNumber);
});

// color change button
const colorButton = document.querySelector("#color");

colorButton.addEventListener("click", (e) => {
    let text = colorButton.textContent;
    if(text === "b/w") {
        colorButton.textContent = "color";
    } else {
        colorButton.textContent = "b/w";
    };
    resetBackgrounds();

});

// get random RGB number
function rgbRandom() {
    min = 0;
    max = 256;
    return  Math.floor(Math.random() * (max - min) + min);
}

const buttonsDiv = document.querySelector("#buttons");
const screenDivContainer = document.querySelector("#screenDivContainer");
buttonsDiv.style.backgroundColor = `rgb(${rgbRandom()}, ${rgbRandom()}, ${rgbRandom()})`;
screenDivContainer.style.backgroundColor = `rgb(${rgbRandom()}, ${rgbRandom()}, ${rgbRandom()})`;


