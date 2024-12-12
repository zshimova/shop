const upBtn = document.querySelector("#scroll-to-top");

window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        upBtn.classList.add('active-scroll')
    } else {
        upBtn.classList.remove('active-scroll')
    }
})

upBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
