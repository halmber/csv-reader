# csv-reader

An Electron application with React and TypeScript

## Task

The application, written in Electron, is designed to process tabular data. Data is read from an arbitrary csv file and displayed in the form of a table. The location of the file is specified by the user, also provide the ability to generate a file, filling it with default values, and the ability to add new records to the file. Check the correspondence of the number of columns in different rows during reading, if different, then notify the user of an error.

(UA) Застосунок, написаний на Electron, призначений для обробки табличних даних. З довільного csv-файлу зчитуються дані та виводяться у вигляді таблиці. Розташування файлу вказується користувачем, також передбачити можливість генерування файлу, заповнюючи його значеннями за замовчуванням, і можливість додавати нові записи у файл. Перевіряти під час зчитування відповідність кількості стовпців у різних рядках, якщо відрізняється, то повідомляти користувачеві про помилку.

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
