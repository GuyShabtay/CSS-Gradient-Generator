const slider = document.getElementById('radiusSlider');
const image = document.getElementById('imageWithBorder');

slider.addEventListener('input', function() {
  const sliderValue = slider.value;
  const borderRadiusValue = sliderValue + 'px';
  image.style.borderRadius = borderRadiusValue;
});
