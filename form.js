'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('.form__input-name');
    const phoneInput = form.querySelector('.form__input-numb');
    const messageInput = form.querySelector('.form__input-message');
    const url = 'https://api.telegram.org/bot6572409290:AAFo8jBULV5LTRvI5NOhEQYIz5ZaQsVHD98/sendMessage';

    const text = `Сообщение из формы\r\n\r\nИмя: ${nameInput.value}\r\nТелефон: ${phoneInput.value}\r\nСообщение: ${messageInput.value}`;

    const formData = new FormData();
    formData.append('chat_id', 259046312);
    formData.append('parse_mode', 'Markdown');
    formData.append('text', text);

    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });

    nameInput.value = '';
    phoneInput.value = '';
    messageInput.value ='';

    alert('Сообщение отправлено!');


})