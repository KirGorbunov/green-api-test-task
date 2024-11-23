document.addEventListener('DOMContentLoaded', () => {
    const getSettingsButton = document.querySelector('button:nth-of-type(1)');
    const responseBox = document.querySelector('.response-box pre');

    getSettingsButton.addEventListener('click', async () => {
        const idInstance = document.getElementById('idInstance').value.trim();
        const apiTokenInstance = document.getElementById('apiTokenInstance').value.trim();

        if (!idInstance || !apiTokenInstance) {
            responseBox.textContent = 'Пожалуйста, заполните поля idInstance и apiTokenInstance.';
            return;
        }

        const apiUrl = `http://0.0.0.0:3000/${idInstance}/GetSettings/${apiTokenInstance}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            responseBox.textContent = JSON.stringify(data, null, 2);
        } catch (error) {
            responseBox.textContent = `Ошибка при выполнении запроса: ${error.message}`;
        }
    });
});
