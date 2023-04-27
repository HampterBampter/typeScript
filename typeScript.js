"use strict";
let books = [
    {
        id: 1,
        title: 'How to Become an Influencer',
        author: 'Glam Sally',
        published: new Date('2023-04-12'),
        available: true,
    },
    {
        id: 2,
        title: 'Five Secrets to a Fulfilling Life',
        author: 'Glam Sally',
        published: new Date('2023-04-19'),
        available: true,
    }
];
let addBook = function (book) {
    books.push(book);
};
let findBookById = function (id) {
    return books.find((book) => book.id == id);
};
let updateBook = function (book) {
    let bookIndex = books.findIndex((aBook) => aBook.id == book.id);
    if (bookIndex >= 0) {
        books[bookIndex] = book;
        return true;
    }
    else {
        return false;
    }
};
let removeBook = function (id) {
    let remove = books.findIndex((book) => book.id == id);
    if (remove >= 0) {
        books.splice(remove, 1);
        return true;
    }
    else {
        return false;
    }
};
addBook({
    id: 3,
    title: 'Inside the Life of Glam Sally',
    author: 'Glam Sally',
    published: new Date('2023-04-27'),
    available: true,
});
updateBook({
    id: 1,
    title: 'Special Ultra Limited Edition: How to Become an Influencer',
    author: "Glam Sally's ghost writter",
    published: new Date('2023-04-12'),
    available: true,
});
removeBook(2);
console.log(books);
