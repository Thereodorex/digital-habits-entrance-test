# Цифровые привычки, тестовое задание

Сборка с помощью webpack в папку docs для деплоя на github pages. Проблема mixed-content решена с помощью редиректа через https://cors-anywhere.herokuapp.com/ 

Предсталены две версии. В ветке without_redux только react, useState, useEffect и styled-components.

Вёртску можно проработать получше. Например, заменить список на ul/li и сделать плавным раскрытие списка.

В ветке main добавлен redux и redux-toolkit. Поведение сохранено прежнее, то есть данные загружаются заново при каждом раскрытии списка.

## Запуск development сервера

### `npm start`

Проект будет доступен на localhost:8080

## Сборка production

### `npm run build`

