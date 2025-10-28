const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
const visibleImages = 3;
const imageWidth = 620; // 200px + 2*10px margin
const totalImages = track.children.length;
const maxIndex = Math.ceil(totalImages / visibleImages) - 1;

function updateCarousel() {
  const offset = currentIndex * visibleImages * imageWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1) < 0 ? maxIndex : currentIndex - 1;
  updateCarousel();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
  updateCarousel();

}, 5000);
