const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateSlider() {
    slides.forEach((slide, index) => {
        const offset = index - currentIndex;
        if (offset === 0) {
            slide.style.transform = 'translateX(0) scale(1)';
            slide.style.opacity = '1';
            slide.style.zIndex = '2';
        } else if (offset === -1) {
            slide.style.transform = 'translateX(-320px) rotateY(30deg) scale(0.8)';
            slide.style.opacity = '0.7';
            slide.style.zIndex = '1';
        } else if (offset === 1) {
            slide.style.transform = 'translateX(320px) rotateY(-30deg) scale(0.8)';
            slide.style.opacity = '0.7';
            slide.style.zIndex = '1';
        } else {
            slide.style.opacity = '0';
            slide.style.zIndex = '0';
        }
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

updateSlider();