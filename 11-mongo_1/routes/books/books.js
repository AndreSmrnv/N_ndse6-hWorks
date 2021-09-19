const express = require('express');
const router = express.Router();
const formData = require("express-form-data");
//const {Book} = require('../../models');

const stor = require('../../store');

const Books = require('../../models/Book_mdb');


router.get('/', async(req, res) => {
    
    const books = await Books.find();

    res.render("books/index", {
        title: "Library",
        books,
    });

});

router.get('/create', (req, res) => {
    console.log('books/create')
    res.render("books/create", {
        title: "Library | create",
        book: {},
    });

});


router.post('/create', async (req, res) => {
   
    const {title, description, authors, favorite, fileCover, fileName} = req.body;

    const newBooks = new Books({
        title, description, authors, favorite, fileCover, fileName
    });
    try {
        await newBooks.save();
        res.redirect('/books');
    } catch (e) {
        console.error(e);
    }
   
});

router.get('/:id', async (req, res) => {

    const { id } = req.params;
    let bookId;

    try {
        bookId = await Books.findById(id);
    } catch (e) {
        console.error(e);
        res.status(404).redirect('/404');
    }
    res.render("books/view", {
                title: "Library | view",
                book: bookId,
    });
        
});

router.get('/update/:id', async (req, res) => {
    
    const { id } = req.params;
    let bookId;

    try {
        bookId = await Books.findById(id);
    } catch (e) {
        console.error(e);
        res.status(404).redirect('/404');
    }
    res.render("books/update", {
                title: "Library | update",
                book: bookId,
            });
    
});

router.post('/update/:id', async (req, res) => {
    
    const {title, description, authors, favorite, fileCover, fileName} = req.body;
    const { id } = req.params;
    try {
        await Books.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover, fileName});
    } catch (e) {
        console.error(e);
        res.status(404).redirect('/404');
    }
    res.redirect(`/books/${id}`);

});





router.post('/delete/:id', async (req, res) => {
    
    const { id } = req.params;
    try {
        await Books.deleteOne({_id: id});
    } catch (e) {
        console.error(e);
        res.status(404).redirect('/404');
    }
    res.redirect(`/books`);
    

});






module.exports = router;

//GET: /api/books/:id/download