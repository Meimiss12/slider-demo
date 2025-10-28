const images = ["oferta1.jpg", "oferta2.jpg", "oferta3.jpg", "oferta4.jpg", "oferta5.jpg", "oferta6.jpg"];
let current = 0;

const sliderImage = document.getElementById("sliderImage");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function showImage(index) {
    sliderImage.style.opacity = 0;
    setTimeout(() => {
        sliderImage.src =images[index];
        sliderImage.style.opacity = 1;
    }, 300);
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  showImage(current);
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

// Opcional: autoplay
setInterval(() => {
  current = (current + 1) % images.length;
  showImage(current);
}, 5000);