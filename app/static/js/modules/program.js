import Swiper, { Navigation  } from 'swiper';
Swiper.use([Navigation]);

const swiper = new Swiper('.program .swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.program__arrow--right',
        prevEl: '.program__arrow--left',
    },
    breakpoints: {
        720: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1160: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
});


const title = document.querySelector('#program-content-title');
const extra = document.querySelector('#program-extra');
const btn = document.querySelector('#program-btn');

const sections = [
    {
        title: 'Вступительный блок',
        extra: 'Бесплатно',
        btn: {
            href: '#',
            text: 'Получить бесплатно'
        }
    },
    {
        title: 'Как же запуститься?',
    },
    
    {
        title: 'Продажи и упаковка',
    },
    {
        title: 'Продвинутые инструменты',
    },
    {
        title: 'Финал',
    },
];

sections.forEach((section, index) => {

    if (index !== 0) {
        section.extra = 'Платно';

        section.btn = {
            href: '#',
            text: 'Купить'
        };

    }

})

swiper.on('slideChange', function () {
    const activeIndex = this.activeIndex;

    const index = Math.floor(activeIndex ? activeIndex / 3 : 0);
        
    const section = sections[index];
    title.textContent = section.title;
    extra.textContent = section.extra;
    btn.textContent = section.btn.text;
    btn.href = section.btn.href;

});
