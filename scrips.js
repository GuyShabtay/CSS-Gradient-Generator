const slider = document.getElementById('radiusSlider');
const gradientImage = document.querySelector('.gradient-image');
const result = document.getElementById('result');

slider.addEventListener('input', function() {
  const sliderValue = slider.value;
  const borderRadiusValue = sliderValue + 'px';
  gradientImage.style.borderRadius = borderRadiusValue;
  result.textContent = sliderValue;

});
