# Catcher [![mit license](https://img.shields.io/badge/license-MIT-50CB22.svg)](https://opensource.org/licenses/MIT) ![status](https://img.shields.io/badge/status-pre--alpha-red)

Проектная работа для Яндекс.Практикума

## Описание

Помогите коту-космонавту поймать все клубки межгалактической пряжи. Не поймали &ndash; миссия провалена.
Судьба котика и всех миров в ваших руках! <br/>

**Управление**: мышь (влево-вправо), клавиатура (кнопки &larr; и &rarr;).

## Технологии
- React,
- Redux,
- TypeScript,
- PostCSS,
- Webpack,
- ESLint,
- Jest,
- axios,
- Express,
- Docker,

## Установка

```bash
git clone https://github.com/praktikum-beta-team/catcher.git --depth 1 funbox-qt
cd catcher
npm i
```


## Использование

### Сборка и запуск проекта

```bash
npm run build
npm start
```

### Запуск окружения разработки

Для локального запуска проекта понадобится SSL-сертификат для домена «localhost». Сертификат и закрытый ключ (localhost.crt и localhost.key, соответственно) необходимо разместить в директории `config/ssl`.

#### Автоматическая генерация SSL-ключа (OpenSSL)

```bash
npm run ssl:dev
```

#### Запуск

```bash
npm run dev
```

По-умолчанию приложение доступно по адресу: https://localhost:5000

### Что хотелось бы добавить

- [ ] Настроить Nginx для раздачи статики;
- [ ] Реализовать управление для тач-устройств;

## Команда
<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/Ortiz1221.png?s=150">
        <br>
        <a href="https://github.com/Ortiz1221">Татьяна Клеванец</a>
      </td>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/0151.png?s=150">
        <br>
        <a href="https://github.com/0151">Родион Костюченко</a>
      </td>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/aleksandr-yakovlev.png?s=150">
        <br>
        <a href="https://github.com/aleksandr-yakovlev">Александр Яковлев</a>
      </td>
     </tr>
  </tbody>
</table>
