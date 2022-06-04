class Book{
    constructor(title,category,author){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isread = false;
        this.finisheddate = null;
    }
    markBookAsRead(){
        this.isread = true;
        this.finisheddate = Date.now();
    }
}

class BookList{
    constructor(){
        this.books = [];
        this.currentIndexBook = 0;
    }
    add(books = []){
        this.books = this.books.concat(books);
        return this.books;
    }
    getCurrentBook(){
        return this.books[this.currentIndexBook];
    }
    getNextBook(){
        this.currentIndexBook = this.currentIndexBook + 1;
        return this.books[this.currentIndexBook]
    }
    getPrevBook(){
        this.currentIndexBook = this.currentIndexBook - 1;
        return this.books[this.currentIndexBook]
    }
    changeCurrentBook(index){
        this.currentIndexBook = index;
        return this.currentIndexBook;
    }
}

let book1 = new Book();
let book2 = new Book();
let library = new BookList();
library.add([book1,book2]);