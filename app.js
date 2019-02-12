var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var color1loaded = document.body.style;
//function section

function setGradient() {
  console.log(color1.value + " " + color2.value);
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
//
// body.addEventListener(onload, function() {
//   body.style.background = color1.value + color2.value;
// });

// //input
// 1. Write code so that the color inputs match the background generated on the first page load.

console.log(document.body.style.background);

//STEPS for Problem #1
// 1. Get input value from HTML document.
// 2. Set input value equal to color #1 & #color 2

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
