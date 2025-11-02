const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const header = document.querySelector('.photo__header');

// Фоны для каждого слайда
const backgrounds = [
    'linear-gradient(135deg, #FFB800 0%, #DE343D 100%)',
    'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
    'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
    'linear-gradient(135deg, #ff512f 0%, #dd2476 100%)',
    'linear-gradient(135deg, #1c92d2 0%, #f2fcfe 100%)'
];

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
        dots[i].classList.toggle('active', i === index);
    });

    header.style.background = backgrounds[index];
}

// Показываем первый слайд
showSlide(0);


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


window.addEventListener("resize", AutoScale); //Масштабируем страницу при растягивании окна

AutoScale(); //Масштабируем страницу после загрузки

function AutoScale()
{
    let width = window.innerWidth; //Ширина окна
    //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

    if(width > 1280)
    {
   	 ChangeScale("big");
    }
    else if(width <= 1280 && width > 720)
    {
   	 ChangeScale("normal");
    }
    else if(width < 720)
    {
   	 ChangeScale("small");
    }
}

