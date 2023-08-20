// script.js

// Function to generate a random color
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Function to change the frog background color
function changeFrogColor() {
  const frogContainer = document.getElementById("frogContainer");
  frogContainer.style.backgroundColor = getRandomColor();
}

// Add event listeners to the frog image container
document.addEventListener("DOMContentLoaded", function() {
  const frogContainer = document.getElementById("frogContainer");
  const clickMeText = document.getElementById("clickMeText");

  frogContainer.addEventListener("click", changeFrogColor);

  frogContainer.addEventListener("mouseenter", function() {
    clickMeText.style.opacity = 1;
    frogContainer.style.filter = "brightness(70%)";
  });

  frogContainer.addEventListener("mouseleave", function() {
    clickMeText.style.opacity = 0;
    frogContainer.style.filter = "brightness(100%)";
  });
});
