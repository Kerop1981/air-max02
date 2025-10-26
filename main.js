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


    new Swiper('.testimoials__inner', {

        spaceBetween: 15,
        slidesPerView: 1.5,
        navigation: {
            nextEl: '.img__strelki1',
            prevEl: '.img__strelki2',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }
    });