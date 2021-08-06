#!/usr/bin/env node
const express = require('express');
const cors = require('cors');
const {Book, User} = require('./models');
const appConfig = require('./config');
const stor = require('./store');

const app = express();
app.use(cors());

app.post('/api/user/login', (req, res) => {
    const {users} = stor;
    res.status(201);
    res.json(users[0]);
});

app.get('/api/books/', (req, res) => {
    const {books} = stor;
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const {books} = stor;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1) {
        res.json(books[idx]);
    } else {
        res.status(404);
        res.json(`book id ${id} | not found`);
    }
});

app.post('/api/books/', (req, res) => {
    const {books} = stor;
    const {title, description, authors, favorite, fileCover, fileName} = req.body;

    const newBook = new Book(title, description, authors, favorite, fileCover, fileName);
    books.push(newBook);

    res.status(201);
    res.json(newBook);
});

app.put('/api/books/:id', (req, res) => {
    const {books} = stor;
    const {title, description, authors, favorite, fileCover, fileName} = req.body;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1) {
        books[idx] = {
            ...books[idx],
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName
        };
        res.json(books[idx]);
    } else {
        res.status(404);
        res.json(`book id ${id} | not found`);
    }
});

app.delete('/api/books/:id', (req, res) => {
    const {books} = stor;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1) {
        books.splice(idx, 1);
        res.json(true);
    } else {
        res.status(404);
        res.json(`book id ${id} | not found`);
    }
});


app.listen(appConfig.listenPort, () => {
    console.log(`Server is running on port ${appConfig.listenPort}`);
});








