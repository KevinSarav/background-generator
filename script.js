var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rand = document.querySelector("h4");

function randomizer() {
  var options = "0123456789abcdef";
  var color = "#";
  var colorr2 = "#";
  for (var i = 0; i < 6; i++) {
    color += options[Math.floor(Math.random() * 16)];
    colorr2 += options[Math.floor(Math.random() * 16)];
  }
  color1.value = color;
  color2.value = colorr2;
  setGradient();
}

function randomizing() {
  var options = "0123456789abcdef";
  var color = "#";
  var colorr2 = "#";
  var randomButton = document.createElement("button");
  randomButton.innerText = "Randomize Colors";
  rand.appendChild(randomButton);
  randomButton.addEventListener("click", function() {
    var options = "0123456789abcdef";
    var color = "#";
    var colorr2 = "#";
    for (var i = 0; i < 6; i++) {
      color += options[Math.floor(Math.random() * 16)];
      colorr2 += options[Math.floor(Math.random() * 16)];
    }
    color1.value = color;
    color2.value = colorr2;
    setGradient();
  });
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

randomizing();
setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
