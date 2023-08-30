const slider = document.getElementById('radiusSlider');
const gradientImage = document.querySelector('.gradient-image');
const result = document.getElementById('result');
const buttonsContainer = document.querySelector('.buttons-container');
// const arrowButtons = buttonsContainer.querySelectorAll('.direction');
const patternButtons = buttonsContainer.querySelectorAll('.shape');
let currentDirection, currentPattern;



slider.addEventListener('input', function() {
  const sliderValue = slider.value;
  const borderRadiusValue = sliderValue + 'px';
  gradientImage.style.borderRadius = borderRadiusValue;
  result.textContent = sliderValue;

});


const changeGradient=function(){
  console.log(currentDirection,currentPattern);
  if(currentPattern==='linear-gradient' || currentPattern==='radial-gradient' )
  gradientImage.style.background = `${currentPattern}(${currentDirection}, rgb(1, 233, 92), rgb(132, 50, 197))`;
else
  gradientImage.style.background = `${currentPattern}(from ${currentDirection}, rgb(1, 233, 92), rgb(132, 50, 197))`;
  
  console.log(`to ${currentPattern}(${currentDirection}, rgb(1, 233, 92), rgb(132, 50, 197))`);


};


patternButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentPattern=button.id;
    console.log("ff")
    clg(button.id);
    changeGradient();

  });
});

