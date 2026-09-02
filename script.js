// screen size
const screenDiv = document.querySelector("#screenDiv");
const screen = document.querySelector("#screen");

// makes it a square
screen.style.width = `${screen.clientHeight}px`;
// console.log(screen.offsetHeight);
// console.log(screen.offsetWidth);

screen.addEventListener("mouseover", mouseOver);


function mouseOver(event){
    let target = event.target;
    // let opacity = target;
    // console.log(target.parentNode);
        if (target.parentNode.id === "screen"){
            if (colorButton.textContent === "color"  &&
                !target.style.backgroundColor) {
            // target.classList.add("coloring");
                target.style.backgroundColor = "black";
            }
            else if (colorButton.textContent === "b/w" &&
                     !target.style.backgroundColor) {
                target.style.backgroundColor = `rgb(${rgbRandom()}, ${rgbRandom()}, ${rgbRandom()})`;
                // target.classList.add("coloring");
            }
            let opacity = +target.style.opacity;
            if (opacity < 1) {
                opacity += 0.2;
                // console.log(typeof target.style.opacity);
                target.style.opacity = `${opacity}`; 
            }
    }
}


// values of the screen size
let screenH = screen.clientHeight; // 500
let screenW = screen.clientWidth; // 500

// values of each square "pixel" size
// let pixelH = pixel.clientHeight;
// let pixelW = pixel.clientWidth;

// input

let squares = 10;
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
    pixel.style.transitionProperty = "background-color";
    pixel.style.transitionDuration = "0s";;
    pixel.style.opacity = "0";
    pixel.classList.add("pixel");
    pixel.style.height = `${side}px`;
    pixel.style.width = `${side}px`;
    screen.appendChild(pixel);
}




// buttons

// clear
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
    let size = prompt("Number of squares per side? (no more than 100)", "50");
    // let size = 50;
    let sizeNumber = Number(size);
    // amount of pixels
    let pixelAmount = document.querySelectorAll("#screen div");
    // remove elements
    pixelAmount.forEach((pixel) => {
        pixel.remove();
    });
    createPixels(size);
});

// color change
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
const buttonsDiv = document.querySelector("#buttons");
buttonsDiv.style.backgroundColor = `rgb(${rgbRandom()}, ${rgbRandom()}, ${rgbRandom()})`;
// buttonsDiv.style.backgroundColor = "red";
console.log(buttonsDiv);


function rgbRandom() {
    min = 0;
    max = 256;
    return  Math.floor(Math.random() * (max - min) + min);
}


// for (let i = 0; i < 1000; i++) {
//     let number = randomNumber(0, 256);
//     console.log(number);
//     if(number === 0  || number === 255) break;

// }
