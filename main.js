/*
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
console.log(myBook);

*/
class Shape{
    name;
    sides;
    sideLength;
    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    getPerimeter(sides, sideLength){
        console.log(sides * sideLength);
    }
}
let shape1 = new Shape("square", 4, 4);
shape1.getPerimeter(shape1.sides, shape1.sideLength);


class Square extends Shape {
   constructor(sideLength){
    super(sideLength);
    this.name = "squares";
    this.sides = 4;
    this.sideLength = sideLength;
   }
    getArea(sides,sideLength){
        console.log((sides/2) * sideLength);
    }
}

let mySquare = new Square(4);
console.log(mySquare);
mySquare.getArea(mySquare.sides, mySquare.sideLength);


class Book {
constructor(name, author, year){
    this.name = name;
    this.author = author;
    this.year = year;
}
}

let form = document.getElementById("my_form");

form.addEventListener('submit', function handleSubmit(event){
    event.preventDefault();

    let option1 = document.querySelector(".field1").value;
    let option2 = document.querySelector(".field1").value;
    let option3 = document.querySelector(".field1").value;

    let book = new Book(option1, option2, option3);
    console.log(book);
})

function myDisplay(book){
console.log(book);
}