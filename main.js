class Book {
    constructor(name, author, status){
        this.name = name;
        this.author = author;
        this.status = status;
    }

    isCheckedOut(status){
        if(status === true){
            console.log("this book is checked out");
        }else{
            console.log("in stock");
        }
    }

}

let myBook = new Book('my book', 'me', false);

console.log(myBook.status);
myBook.isCheckedOut(myBook.status);