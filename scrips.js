'use strict';
const slider = document.getElementById('radiusSlider');
const gradientImage = document.querySelector('.gradient-image');
const result = document.getElementById('result');
const buttonsContainer = document.querySelector('.buttons-container');
const arrowButtons = buttonsContainer.querySelectorAll('.direction');
const patternButtons = buttonsContainer.querySelectorAll('.pattern');

let currentDirection, currentPattern;

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

window.addEventListener('load', function () {
  const button = document.getElementById('linear');
  button.classList.add('pressed');
});
