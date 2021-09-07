# Цифровые привычки, тестовое задание

Сборка с помощью webpack в папку docs для деплоя на [github pages](https://thereodorex.github.io/digital-habits-entrance-test/). Для решения проблемы mixed-content нужно сначала пройти по [ссылке](https://cors-anywhere.herokuapp.com/corsdemo) и нажать кнопку "Request temporary access to the demo server".

Предсталены три версии. В ветке without_redux только react, useState, useEffect и styled-components. Версия без redux мне нравится больше, так как в нём нет потребности для решения данной задачи.

В ветке main добавлен redux и redux-toolkit. Поведение сохранено прежнее, то есть данные загружаются заново при каждом раскрытии списка.

В ветке redux_overhead немного поиграл с редаксом. В этой версии файлы хранятся в объекте, в котором ключом служит id файла и для получения каждого файла используется селектор. В этой версии обыграны состояния загрузки после нажатия на файл и неудачной загрузки.

## Запуск development сервера

### `npm start`

Проект будет доступен на localhost:8080

## Сборка production

### `npm run build`

