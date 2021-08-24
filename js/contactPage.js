const contactLink = document.querySelector('.contact-link');
const main = document.querySelector('.main');
const contactPage = document.querySelector('.contact-box');

const show = () =>{
    main.style.display = 'none'
    contactPage.style.display = 'flex'

    if(contactPage.style.display === 'flex'){
        listUl.classList.remove('lists-active')
    }
};

contactLink.addEventListener('click', show)

