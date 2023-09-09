'use strict';

const galleryImages = document.querySelectorAll('.portfolio__item');
const popup = document.querySelector('.popup-image');
const popupImage = popup.querySelector('img');
const closeBtn = document.querySelector('#close');

galleryImages.forEach((item)=> {
    item.addEventListener('click', () => {
        let source = item.getAttribute('src');
        popupImage.src = source;
        popup.classList.toggle('popup-hidden');
    });
})

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('popup-hidden');
})