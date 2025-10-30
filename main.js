
const swiper = new Swiper('.testimonials__slides-viewport', {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1,
        }
    }
});

// ====================================================
document.addEventListener('DOMContentLoaded', function() {

    var mixer = mixitup('.kross__container', {
        selectors: {
            target: '.testimonials__slide'
        },
        animation: {
            duration: 300
        }
    });

    var mixer2 = mixitup('.kross__container2', {
        selectors: {
            target: '.testimonials__slide'
        },
        animation: {
            duration: 300
        }
    });

    const filterBtn = document.querySelectorAll('.filter-button')[0]; 
    const sortBtn   = document.querySelectorAll('.filter-button')[1]; 

    let currentFilter = 'all';
    filterBtn.addEventListener('click', () => {
        if (currentFilter === 'all') {
            mixer.filter('.brand-nike');
            mixer2.filter('.brand-nike');
            currentFilter = 'nike';
        } else if (currentFilter === 'nike') {
            mixer.filter('.brand-newbalance');
            mixer2.filter('.brand-newbalance');
            currentFilter = 'newbalance';
        } else {
            mixer.filter('all');
            mixer2.filter('all');
            currentFilter = 'all';
        }
    });

    let sortAsc = true;
    sortBtn.addEventListener('click', () => {
        if (sortAsc) {
            mixer.sort('price:asc');
            mixer2.sort('price:asc');
        } else {
            mixer.sort('price:desc');
            mixer2.sort('price:desc');
        }
        sortAsc = !sortAsc;
    });
});
