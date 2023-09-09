'use strict';

const galleryImages = document.querySelectorAll('.portfolio__item');
const popup = document.querySelector('.popup-image');
const popupImage = popup.querySelector('img');
const closeBtn = document.querySelector('#close');
const arrowPrev = document.querySelector('.arrow-prev');
const arrowNext = document.querySelector('.arrow-next');

let currentIndex = 0;

galleryImages.forEach((item, index) => {
    item.addEventListener('click', () => {
        let source = item.getAttribute('src');
        popupImage.src = source;
        popup.classList.toggle('popup-hidden');
        currentIndex = index;
    });
})

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('popup-hidden');
})

arrowPrev.addEventListener('click', () => {
    if (currentIndex == 0) {
        currentIndex = galleryImages.length - 1;
    } else {
        currentIndex--;
    }
    popupImage.src = galleryImages[currentIndex].getAttribute('src');
})

arrowNext.addEventListener('click', () => {
    if (currentIndex == galleryImages.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    popupImage.src = galleryImages[currentIndex].getAttribute('src');
})