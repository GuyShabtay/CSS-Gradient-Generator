'use strict';
const slider = document.getElementById('radiusSlider');
const gradientImage = document.querySelector('.gradient-image');
const result = document.getElementById('result');
const buttonsContainer = document.querySelector('.buttons-container');
const arrowButtons = buttonsContainer.querySelectorAll('.direction');
const patternButtons = buttonsContainer.querySelectorAll('.pattern');
const randomButton = document.getElementById('random');
const colorButton1 = document.getElementById('color-1');
const colorButton2 = document.getElementById('color-2');


let currentDirection, currentPattern,color1,color2;

slider.addEventListener('input', function () {
  const sliderValue = slider.value;
  const borderRadiusValue = sliderValue + 'px';
  gradientImage.style.borderRadius = borderRadiusValue;
  result.textContent = sliderValue;
});

const changeGradient = function () {
  console.log(currentDirection, currentPattern);
  if (
    currentPattern === 'linear-gradient' ||
    currentPattern === 'radial-gradient'
  )
    gradientImage.style.background = `${currentPattern}(${currentDirection}, rgb(1, 233, 92), rgb(132, 50, 197))`;
  else
    gradientImage.style.background = `${currentPattern}(from ${currentDirection}, rgb(1, 233, 92), rgb(132, 50, 197))`;

  console.log(
    `to ${currentPattern}(${currentDirection}, rgb(1, 233, 92), rgb(132, 50, 197))`
  );
};
const selectButton = function (buttons,pressedButton) {
  if (pressedButton.classList !== 'pressed') {
    buttons.forEach((button) => {
      button.classList.remove('pressed');
    });
    pressedButton.classList.add('pressed');
  }
};

patternButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('ff');
    button.classList.add('pressed');
    currentPattern = button.id;
    console.log(button.id);
    changeGradient();
  });
});
arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectButton (arrowButtons,button);

    currentDirection = button.id;
    console.log('ff');
    console.log(button.id);
    changeGradient();
  });
});
arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectButton (arrowButtons,button);

    currentDirection = button.id;
    console.log('ff');
    console.log(button.id);
    changeGradient();
  });
});

window.addEventListener('load', function () {
  const arrowButton = document.querySelector('.top-right');
  arrowButton.classList.add('pressed');
  const shapeButton = document.getElementById('rectangle');
  shapeButton.classList.add('pressed');
  const patternButton = document.getElementById('linear');
  patternButton.classList.add('pressed');
});

const generate = function () {
  color1=colorButton1.value;
  color2=colorButton2.value;
  gradientImage.style.background=`linear-gradient(270deg,${color1} , ${color2}`;
  console.log(`linear-gradient(270deg,${color1} , ${color2}`)
};
colorButton1.addEventListener('input', generate);
colorButton2.addEventListener('input', generate);

randomButton.addEventListener('click', function () {
  console.log('random clicked')
  colorButton1.value=randomColor();
  colorButton2.value=randomColor();
  generate();
});

