"use strict";

function Book(Book, Topic, Pages, ISBN) {
    this.Book = Book;
    this.Topic = Topic;
    this.Pages = Pages;
    this.ISBN = ISBN;
    this.getBookInfo = function() {
        console.log('Book: ' + this.Book + '\nTopic: ' + this.Topic + '\nPages: ' + this.Pages + '\nISBN: ' + this.ISBN);
        console.log('------------\n');
    };
}

let books = [];
books.push(new Book('Pippi', 'Childrensbook', '159', '978-91-7004-152-7'));
books.push(new Book('Emil', 'Childrensbook', '205', '978-91-7007-150-0'));
books.push(new Book('Ronja Rövadotter', 'Childrensbook', '300', '978-91-7002-158-5'));

let amount = prompt("How many books are you select?", " ");
for (let i = 0; i < amount; i++) {
    let book = prompt('Book: ', '');
    let Topic = prompt('Topic: ', '');
    let Pages = parseInt(prompt('Pages: ', ''));
    let ISBN = parseInt(prompt('ISBN: ', ''));
    books.push(new Book(book, Topic, Pages, ISBN));
}

books.forEach(function(e) {
    e.getBookInfo();
});