import SmoothScroll from 'smooth-scroll';

window.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.menu');
    const page = document.querySelector('html');
    const header = document.querySelector('.header');

    const scroll = new SmoothScroll('a[href*="#"]', {
        offset: () =>  {
            const height =  header.clientHeight;
            const fixed = header.classList.contains('header--active');
            return fixed ? height : height * 2
        },
        easing: 'easeInOutQuint',
        emitEvents: true
    });


    menu.addEventListener('click', function() {
        header.classList.toggle('header--black');
        navbar.classList.toggle('active');
    });

    window.addEventListener('scroll', function() {
        
        if(page.scrollTop > 300 && !header.classList.contains('header--active')) {
            header.classList.add('header--active');
        }
        else if(header.classList.contains('header--active') && page.scrollTop <= 300) {
            header.classList.remove('header--active');
        }
        
    });

    window.addEventListener('click', function(e) {
        const target = e.target;

        if(!header.contains(target) && navbar.classList.contains('active')) {
            header.classList.remove('header--black');
            navbar.classList.remove('active');
        }
    });

    header.addEventListener('click', function(e) {
        if(e.target.tagName === 'A') {
            header.classList.remove('header--black');
            navbar.classList.remove('active');
        }
    });

});
    


