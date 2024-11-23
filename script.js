// Получение ссылки на элементы интерфейса
const idInstanceInput = document.getElementById('idInstance');
const apiTokenInput = document.getElementById('apiTokenInstance');
const phoneNumber1Input = document.getElementById('phoneNumber1');
const messageInput = document.getElementById('message');
const phoneNumber2Input = document.getElementById('phoneNumber2');
const fileLinkInput = document.getElementById('fileLink');
const responseBox = document.querySelector('.response-box pre');

// Базовый URL API
const BASE_URL = 'http://0.0.0.0:3000';

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
