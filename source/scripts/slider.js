const prevBtn = document.querySelector('.slider__btn-prev');
const nextBtn = document.querySelector('.slider__btn-next');
const gallerySlider = document.querySelector('.slider__gallery');
const slides = gallerySlider.querySelectorAll('.slider__gallery-item');
const paginationSlider = document.querySelector('.slider__paginations');
const pointsPagination = paginationSlider.querySelectorAll('.slider__paginations-btn');

let slideIndex = 0;
const slidesCount = slides.length;

const updateButtons = () => {
  prevBtn.disabled = (slideIndex === 0);
  nextBtn.disabled = (slideIndex === slidesCount - 1);
};

const updatePaginations = () => {
  pointsPagination.forEach((item, index) => {
    item.classList.toggle('slider__paginations-btn--current', index === slideIndex);
  });
};

const updateSlider = () => {
  const offset = slideIndex * 100;
  gallerySlider.style.transform = `translateX(-${offset}%)`;
};

const render = () => {
  updateButtons();
  updateSlider();
  updatePaginations();
};

const showPrevSlide = () => {
  if (slideIndex > 0) {
    slideIndex--;
    render();
  }
};

const showNextSlide = () => {
  if (slideIndex < slidesCount - 1) {
    slideIndex++;
    render();
  }
};

const initPagination = () => {
  pointsPagination.forEach((item, index) => {
    item.addEventListener('click', () => {
      slideIndex = index;
      render();
    });
  });
};

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

initPagination();
render();
