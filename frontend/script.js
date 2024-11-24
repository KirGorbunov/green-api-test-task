// Получение ссылки на элементы интерфейса
const idInstanceInput = document.getElementById('idInstance');
const apiTokenInput = document.getElementById('apiTokenInstance');
const phoneNumber1Input = document.getElementById('phoneNumber1');
const messageInput = document.getElementById('message');
const phoneNumber2Input = document.getElementById('phoneNumber2');
const fileLinkInput = document.getElementById('fileLink');
const responseBox = document.querySelector('.response-box pre');

// Базовый URL API
const BASE_URL = 'http://localhost/app/';

// Функция для отправки запросов
async function sendRequest(endpoint, method = 'GET', body = null) {
    try {
        const idInstance = idInstanceInput.value.trim();
        const apiToken = apiTokenInput.value.trim();

        if (!idInstance || !apiToken) {
            alert('Пожалуйста, заполните idInstance и apiTokenInstance');
            return;
        }

        const url = `${BASE_URL}/${idInstance}/${endpoint}/${apiToken}`;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : null,
        };

        const response = await fetch(url, options);
        const data = await response.json();

        // Отображение ответа в правой панели
        responseBox.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        responseBox.textContent = `Ошибка: ${error.message}`;
    }
}

// Обработчики кнопок
document.querySelector('button:nth-of-type(1)').addEventListener('click', () => {
    sendRequest('GetSettings', 'GET');
});

document.querySelector('button:nth-of-type(2)').addEventListener('click', () => {
    sendRequest('GetStateInstance', 'GET');
});

document.querySelector('button:nth-of-type(3)').addEventListener('click', () => {
    const phoneNumber = phoneNumber1Input.value.trim();
    const message = messageInput.value.trim();

    if (!phoneNumber || !message) {
        alert('Пожалуйста, заполните номер телефона и сообщение');
        return;
    }

    sendRequest('SendMessage', 'POST', {
        chatId: `${phoneNumber}@c.us`,
        message,
    });
});

document.querySelector('button:nth-of-type(4)').addEventListener('click', () => {
    const phoneNumber = phoneNumber2Input.value.trim();
    const fileLink = fileLinkInput.value.trim();

    if (!phoneNumber || !fileLink) {
        alert('Пожалуйста, заполните номер телефона и ссылку на файл');
        return;
    }

    sendRequest('SendFileByUrl', 'POST', {
        chatId: `${phoneNumber}@c.us`,
        urlFile: fileLink,
        fileName: 'file',
    });
});
