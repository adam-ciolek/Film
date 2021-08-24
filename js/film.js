const swiperSlide = document.querySelectorAll('.swiper-slide');
const body = document.body

swiperSlide.forEach( el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
         body.style.backgroundImage = `url(${target.src})`
         body.style.backgroundRepeat = 'no-repeat'
         body.style.backgroundSize= 'cover'
    })
})


// Hamburger

const hamburger = document.querySelector('.hamburger');
const info = document.querySelector('.info');

const menu = () => {
    info.classList.toggle('lists-active');
}


hamburger.addEventListener('click', menu);



