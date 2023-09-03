'use strict';
const slider = document.getElementById('radiusSlider');
const gradientImage = document.querySelector('.gradient-image');
const result = document.getElementById('result');
const arrowButtons = document.querySelectorAll('.direction');
const centerarrowButton = document.querySelector('.center');
const patternButtons = document.querySelectorAll('.pattern');
const shapeButtons = document.querySelectorAll('.shape');
const randomButton = document.getElementById('random');
const colorButton1 = document.getElementById('color-1');
const colorButton2 = document.getElementById('color-2');
const switchButton = document.querySelector('.switch');
const footer = document.getElementById('footer');
const bodyBG = document.querySelector('body');
const headingText = document.getElementById('heading');
const allButtons = document.querySelectorAll('.btn');
const headerBG = document.querySelector('header');
const lightIcon = document.getElementById('light');
const nightIcon = document.getElementById('night');
const logoImage = document.querySelector('.logo');
const links = document.querySelectorAll('a');
const copyButton = document.getElementById('hex');



let currentDirection, currentPattern, currentShape, color1, color2, theme='light',copiedText;

slider.addEventListener('input', function () {
  const sliderValue = slider.value;
  const borderRadiusValue = sliderValue + 'px';
  gradientImage.style.borderRadius = borderRadiusValue;
  // result.textContent = sliderValue;
});
copyButton.addEventListener('click', function () {
  copyToClipBoard();
  // copyToClipBoard.innerText.style.add('removed');
  // copyToClipBoard.innerText.style.remove('removed');
  copyButton.innerHTML='copied! <i class="fa-solid fa-check"></i>';
  setTimeout(() => {
    copyButton.innerHTML='Copy code <i class="fa-regular fa-clipboard"></i>';
  }, 3000); // 3000 milliseconds (3 seconds)
 
});

const copyToClipBoard = function () {
  navigator.clipboard.writeText(`${copiedText}`)
  
};
const changeGradient = function () {
  console.log(currentDirection, currentPattern);
  if (currentPattern === 'linear')
  copiedText=gradientImage.style.background = `background: ${currentPattern}-gradient(${currentDirection}, ${color1}, ${color2});`;
  else if (currentPattern === 'radial') {
    copiedText=gradientImage.style.background = `background: ${currentPattern}-gradient(at center, ${color1}, ${color2});`;
  } else
  copiedText=gradientImage.style.background = `background: ${currentPattern}-gradient(from ${currentDirection}, ${color1}, ${color2});`;

  console.log(
    (gradientImage.style.background = `${currentPattern}-gradient(${currentDirection}, ${color1}, ${color2})`)
  );
};

const selectButton = function (buttons, pressedButton) {
      console.log(` selectButton ${theme}-pressed`);

  if (!pressedButton.classList.contains(`${theme}-pressed`)) {
    buttons.forEach((button) => {
      button.classList.remove(`${theme}-pressed`);
    });
    pressedButton.classList.add(`${theme}-pressed`);
    return false;
  } else
  {
    // pressedButton.classList.add(`${theme}-pressed`);
    // console.log(` color change ${theme}-pressed`);
    return true;
  }
};
const selectButtonThemeChange = function (button,changedFrom) {
      button.classList.remove(`${changedFrom}-pressed`);
      button.classList.add(`${theme}-pressed`);
};


patternButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectButton(patternButtons, button);
    currentPattern = button.id;
    currentPattern === 'radial'
      ? centerarrowButton.classList.remove('hidden')
      : centerarrowButton.classList.add('hidden');

    console.log(currentPattern);
    changeGradient();
  });
});

arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectButton(arrowButtons, button);
    currentDirection = button.id;
    // console.log('ff');
    console.log(currentDirection);
    changeGradient();
  });
});
shapeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isPressed = selectButton(shapeButtons, button);
    currentShape = button.id;

    // const shape = document.getElementById(`$(button.id)`);
    if (!isPressed) {
      shapeButtons.forEach((button) => {
        gradientImage.classList.remove(`${button.id}`);
      });
      gradientImage.classList.add(currentShape);
      if (currentShape === 'line') {
        slider.max = '50';
        slider.step = '10';
      } else {
        slider.max = '250';
        slider.step = '25';
      }
    }
    // currentStrike0El.classList.add('currentStrike')
    // currentShape = button.id;
    // gradientImage.style.height =
    // gradientImage.style.width =
    // console.log('ff');
    // console.log(button.id);
    // changeGradient();
  });
});

window.addEventListener('load', function () {
  // const arrowButton = document.querySelector('.top-right');
  // arrowButton.classList.add('pressed');
  // const shapeButton = document.getElementById('rectangle');
  // shapeButton.classList.add('pressed');
  // const patternButton = document.getElementById('linear');
  // patternButton.classList.add('pressed');
  init();
});

const generate = function () {
  color1 = colorButton1.value;
  color2 = colorButton2.value;
  changeGradient();
  // gradientImage.style.background=`${currentPattern}-gradient(${currentDirection},${color1} , ${color2}`;
  // console.log(`${currentPattern}-gradient(${currentDirection},${color1} , ${color2}`)
};
colorButton1.addEventListener('input', generate);
colorButton2.addEventListener('input', generate);

randomButton.addEventListener('click', function () {
  console.log('random clicked');
  colorButton1.value = randomColor();
  colorButton2.value = randomColor();
  generate();
});

const init = function () {
  // change to function these 3 rows!!!!!!!
  colorButton1.value = randomColor();
  colorButton2.value = randomColor();

  const arrowButton = document.querySelector('.top-right');
  const shapeButton = document.getElementById('rectangle');
  const patternButton = document.getElementById('linear');

  selectButton(arrowButtons, arrowButton);
  selectButton(shapeButtons, shapeButton);
  selectButton(patternButtons, patternButton);

  currentDirection = arrowButton.id;
  currentShape = shapeButton.id;
  currentPattern = patternButton.id;
  generate();
  // centerarrowButton.classList.add('hidden');
};

switchButton.addEventListener('click', function () {
  let otherTheme,color;
  if(theme==='light'){
    theme='dark';
    otherTheme='light';
color='white';
  }else{
    theme='light';
    otherTheme='dark'
    color='#333'
  }
  console.log(theme,otherTheme)
footer.classList.toggle('light-pressed');
bodyBG.classList.toggle('dark-bg');
bodyBG.classList.toggle('dark-color');
headingText.classList.toggle('dark-color');
lightIcon.classList.toggle('removed');
nightIcon.classList.toggle('removed');
logoImage.src=`${otherTheme}.png`;
links.forEach((button) => {
  button.style.color=color;
  // button.classList.toggle('light-color');
});
allButtons.forEach((button) => {
   button.classList.toggle('dark-btn');

  if (button.classList.contains(`${otherTheme}-pressed`))
  {
  button.classList.remove(`${otherTheme}-pressed`);
  button.classList.add(`${theme}-pressed`);
  }
});
});




// bodyBG.classList.toggle('dark-bg');
// headingText.classList.toggle('dark-color');
// lightIcon.classList.toggle('removed');
// nightIcon.classList.toggle('removed');
// logoImage.src=`${theme}.png`;
// console.log(`${theme}.png`)

// links.forEach((button) => {
//   button.style.color='white';
// });
// allButtons.forEach((button) => {
//    button.classList.toggle('dark-btn');

//   if (button.classList.contains(`${otherTheme}-pressed`))
//   {
//   button.classList.remove(`${otherTheme}-pressed`);
//   button.classList.add(`${theme}-pressed`);
//   }
// });
