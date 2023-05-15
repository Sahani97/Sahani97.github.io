const container = document.querySelector('.container');
const imageContainer = document.querySelector('.image-container');

container.addEventListener('scroll', () => {
  imageContainer.style.transform = `translateX(-${container.scrollLeft}px)`;
});