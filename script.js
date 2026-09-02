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
    // console.log(target.parentNode);
        if (target.parentNode.id === "screen"){
        // target.style.backgroundColor = "black";
            target.classList.add("coloring");
    }
}




// create pixel divs

function createPixel(side) {
    const pixel = document.createElement("div");
    pixel.setAttribute("style","border: 1px solid deepskyblue; flex: 0 0 auto;");
    pixel.style.transitionProperty = "background-color";
    pixel.style.transitionDuration = "0s";;
    pixel.classList.add("pixel");
    pixel.style.height = `${side}px`;
    pixel.style.width = `${side}px`;

// add the extra styles for the transition


    screen.appendChild(pixel);

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


for(let i =  0; i < total; i++) {
    // console.log(i);
    createPixel(pixelSize);
};


// buttons
// clear

const clearButton = document.querySelector("#clear");
const allPixels = document.querySelectorAll("#screen div");

clear.addEventListener("click", (event) => {
    resetBackgrounds(allPixels);
});


function resetBackgrounds(arr) {
    allPixels.forEach((pixel) => {
        // pixel.style.backgroundColor = "white";%
        pixel.classList.remove("coloring");
        console.log("hi");
    });
}
