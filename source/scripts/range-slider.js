import noUiSlider from '../vendor/nouislider.mjs';

const slider = document.querySelector('.form__slider');


noUiSlider.create(slider, {
  start: [0, 900],
  connect: true,
  step: 1,
  margin: 140,
  range: {
    min: 0,
    max: 1000,
  },
});

const minPrice = document.querySelector('.form__price-min');
const maxPrice = document.querySelector('.form__price-max');
const prices = [minPrice, maxPrice];

slider.noUiSlider.on('update', (values, handle) => {
  prices[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (i, value) => {
  const arr = [null, null];
  arr[i] = value;

  slider.noUiSlider.set(arr);
};

prices.forEach((price, index) => {
  price.addEventListener('change', (evt) => {
    const currentValues = slider.noUiSlider.get();
    currentValues[index] = evt.currentTarget.value;
    setRangeSlider(index, evt.currentTarget.value);
  });
});

const updateSliderMargin = () => {
  let dynamicMargin = 124;

  const width = window.innerWidth;

  if (width < 1440) {
    dynamicMargin = 176;
  }

  if (width < 728) {
    dynamicMargin = 140;
  }

  slider.noUiSlider.updateOptions({
    margin: dynamicMargin
  });
};

window.addEventListener('resize', updateSliderMargin);

updateSliderMargin();
