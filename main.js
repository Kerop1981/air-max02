// const slides = document.querySelector('.testimoials__iner');

// const slideCount = document.querySelector('.testimonials__slide').length;

// const prevButton = document.querySelector('.strelka1');
// const nextButton = document.querySelector('.strelka2');

// let currentIndex = 0;

// function goToSlide(index){
//     if (index < 0){
//         index = slideCount - 1
//     } else if (index >= slideCount) {
//         index = 0;
//     }

//     currentIndex = index;
//     slides.computedStyleMap.transform = `translateX(${-index * 100}%)`
// }

// prevButton.addEventListener('click', () => {
//     goToSlide(currentIndex - 1);
// });

// nextButton.addEventListener('click', () => {
//     goToSlide(currentIndex + 1)
// })

// goToSlide(0)


const swiper = new Swiper('.testimonials__slides-viewport', {
    
    slidesPerView:4,

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});