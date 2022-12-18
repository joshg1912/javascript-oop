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


class Shape{
    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    getPerimeter(sides, sideLength){
        console.log(sides * sideLength);
    }
}
let square = new Shape("square", 4, 4);
square.getPerimeter(square.sides, square.sideLength);