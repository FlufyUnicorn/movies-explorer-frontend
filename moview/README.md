# ***Проект Movies-explorer-frontend***
*Описание*
----

Данное веб-приложение является сайтом-портфолио и поисковиком фильмов с возможностью сохранения их к себе в коллекцию, открывающимся после регистрации.

Бэкэнд часть проекта располагается [тут](https://github.com/FlufyUnicorn/movies-explorer-api).

***В нём представлены:***

* Лендинг c кратким описанием:
    + Работы над дипломом (этапы, дедлайны)
    + Изученных технологий во время обучения
    + Информации о себе
    + Портфолио (часть проектов)
* Поисковик фильмов с возможностью сохранения их к себе в коллекцию

---
## *Функциональность:*
* Защищённость роутов (нельзя перейти к приложению-поисковику, если не выполнен вход)
* Реализована **валидация** всех форм/полей ввода с использованием регулярных выражений и сторонних библиотек
* Использование собственных **хуков** (универсальный обработчик полей, валидация, контроль разрешения экрана)
* Сохранение/удаление найденных фильмов к себе в аккаунт
* Реализован **фильтр** короткометражных фильмов
* Полноценый **адаптивный** сайт для всех популярных разрешений экрана
* На странице поиска фильмов по клику на кнопку **"Ещё"** - показываются дополнительные фильмы
* Все данные хранятся на сервере, использовано сторонее и собственное API

---
## *Используемые технологии:*

* React
* JS
* HTML
* CSS

---
## *Запуск проекта:*
`npm i` — установка зависимостей

`npm run start` — запускает приложение

---
## *Ссылки:*

* Домен, по которому доступно приложение [http://moview.students.nomoreparties.co/](http://moview.students.nomoreparties.co/)
* Домен с бэкендом [http://api.moview.students.nomoreparties.co/](http://api.moview.students.nomoreparties.co/)
* Публичный IP адрес сервера `51.250.66.186`
* Ссылка на индивидульный [макет](https://www.figma.com/file/6GaJGSDxdUh5exHIokZ6s1/light-2?type=design&node-id=41057%3A15320&mode=dev), по которому верстался проект