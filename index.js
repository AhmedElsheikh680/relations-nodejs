const mongoose = require('mongoose');





//Connect To DB
mongoose.connect('mongodb://localhost/books',{
    useNewurlParser: true
}).
then(()=> console.log('Connect To DB Successfully...'))
    .catch((error)=> console.error('Connection Failed!!'+ error));


const authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const Author = mongoose.model('Author', authSchema);

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Author
    }

})

const Book = mongoose.model('Book', bookSchema);

async function createAuthor(name, description, age) {
    const author = Author({
        name, description, age
    });
    const result = await author.save();
    console.log(result);
}

async function createBook(name, description, author) {
    const book = Book({
       name, description, author
    });
    const result = await book.save();
    console.log(result);
}

async function getBooks(){
    const books = await Book.find();
    console.log(books);
}

//create Author
// createAuthor('Ayman Hassan', 'JS Developer', 42);

//createBook
// createBook("Java", "Java ES6","623687a4616a6f8e0e7bd634");

//getBooks
getBooks();





















