let slider = document.querySelector('.slider-container');
let slides = document.querySelectorAll('.slide');
let nextSlide = document.querySelector('#next-slide');
let prevSlide = document.querySelector('#prev-slide');
let currentIndex = 0;

let totalClicks;
let sliderWidth = slider.scrollWidth; 
let visibleWidth; 
let movingSize; 

// Функция для расчета параметров слайдера
function calculateSliderSettings() {
    visibleWidth = Math.min(window.innerWidth, slider.offsetWidth); 
    totalClicks = window.innerWidth > 768 ? 3 : 6; 
    movingSize = (sliderWidth - visibleWidth) / totalClicks; 
}

// Функция для перемещения ленты
function moveSlider() {
    let offset = -currentIndex * movingSize; 
    slider.style.transform = `translateX(${offset}px)`; 
    slider.style.transition = 'transform 0.5s ease';
}

// Функция для обновления состояния кнопок
function updateButtonStates() {
    if (currentIndex === 0) {
        prevSlide.disabled = true; 
        prevSlide.classList.add('inactive'); 
    } else {
        prevSlide.disabled = false; 
        prevSlide.classList.remove('inactive'); 
        prevSlide.classList.add('not-inactive')
    }

    if (currentIndex === totalClicks) {
        nextSlide.disabled = true; 
        nextSlide.classList.add('inactive'); 
    } else {
        nextSlide.disabled = false; 
        nextSlide.classList.remove('inactive'); 
    }
}

// Обработчик клика "Следующий слайд"
nextSlide.addEventListener('click', () => {
    if (currentIndex < totalClicks) {
        currentIndex++;
        moveSlider();
        updateButtonStates();
    }
});

// Обработчик клика "Предыдущий слайд"
prevSlide.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        moveSlider();
        updateButtonStates();
    }
});

// Перерасчет при изменении размеров окна
window.addEventListener('resize', () => {
    calculateSliderSettings();
    moveSlider();
    updateButtonStates(); 
});

// Инициализация
calculateSliderSettings();
updateButtonStates();