const {Schema, model} = require('mongoose');

const booksSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    authors: {
        type: String,
        default: "",
    }
});

const Books = model('Books', booksSchema)



1-  запрос(ы) для вставки данных минимум о двух книгах в коллекцию books

    const newBooks = new Books({
        title: 'b1', description: 'desc b1', authors: 'auth b1'
        })
    newBooks.save();
    const newBooks2 = new Books({
        title: 'b2', description: 'desc b2', authors: 'auth b2'
        })
    newBooks2.save();

2-  запрос для поиска полей документов коллекции books по полю title

    const books =  Books.find({title: 'b2'});


3-  запрос для редактирования полей: description и authors коллекции books по _id записи

    const  id  = '654646433546431';
    Books.findByIdAndUpdate(id, {title: 'b22', description: 'desc b22', authors: 'auth b22'});



*Каждый документ коллекции books должен содержать следующую структуру данных:

{
  title: "string",
  description: "string",
  authors: "string"
}