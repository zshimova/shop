// переменные
const burgerBtn = document.querySelector('.burger');
const navigationList = document.querySelector('.navigation__list');
const menuLinks = document.querySelectorAll('.navigation__list a');

// открыть/закрыть меню
burgerBtn.addEventListener('click', () => {
    navigationList.classList.toggle('show');
    burgerBtn.classList.toggle('close');

    if(navigationList.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// закрыть меню при клике по ссылкам и переход
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const href = link.getAttribute('href'); 
        navigationList.classList.remove('show');
        burgerBtn.classList.remove('close');
        document.body.style.overflow = ''

        // ждем, пока закроется меню
        setTimeout(() => {
            window.location.href = href;
        }, 300); 
    });
});

