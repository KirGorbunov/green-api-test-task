# Тестовое задание на вакансию [DevOps-инженер](https://hh.ru/vacancy/111238711?hhtmFrom=negotiation_list)

## Описание

Результатом выполнения тестового задания является HTML-страница для работы с методами GREEN-API. Она позволяет подключаться к инстансу, отправлять сообщения и файлы, а также получать текущие настройки и состояние инстанса.

## Функционал

1. **Методы GREEN-API:**
   - `getSettings` – Получение настроек инстанса.
   - `getStateInstance` – Проверка состояния инстанса.
   - `sendMessage` – Отправка текстового сообщения.
   - `sendFileByUrl` – Отправка файла по URL.

2. **Интерфейс:**
   - Поля для ввода `idInstance` и `ApiTokenInstance`.
   - Кнопки для вызова каждого метода.
   - Отображение ответа методов в отдельном поле только для чтения.
   - **Дополнительно** сделан выбор прокси для доступа к API (либо через прокси Nginx, либо через прокси-сервер FastAPI).

## Демонстрация

- **Ссылка на развернутую страницу:** [GREEN-API Test Task](http://93.183.82.240/)

## Локальный запуск

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/KirGorbunov/green-api-test-task.git
   ```

2. Перейдите в папку с проектом:
   ```bash
   cd green-api-test-task
   ```

3. Скопировать .env.example и переименовать копию в .env:
   ```bash
   cp .env.example .env
   ```

4. Запустите docker compose:
   ```bash
   docker compose up
   ```

5. Открыть браузер и перейти на localhost:
   ```bash
   http://localhost/
   ```

## Используемые технологии

- **HTML5** – Основная структура страницы.
- **CSS** – Оформление интерфейса.
- **JavaScript (Vanilla)** – Реализация вызовов.
- **FastAPI** – Реализация прокси-сервера.
- **Ngnix** – веб-сервер.

## Ссылки

- **Моя страница на GitHub:** [https://github.com/KirGorbunov](https://github.com/KirGorbunov)
- **Развернутая страница:** [http://93.183.82.240/](http://93.183.82.240/)
- **Контакты:**
  - Telegram: [@KirGorbunov](https://t.me/KirGorbunov)
  - Email: KirGorbunov@gmail.com