export class bookmodule {

    bookName: string;
    authorName: string;
    bookDsc: string;
    bookImg: string;
    price: number;
    quantity: number;

    constructor(bookName: string,
        authorName: string,
        bookDsc: string,
        bookImg: string,
        price: number,
        quantity: number){
            
    this.bookName=bookName; 
    this.authorName= authorName;
    this.bookDsc=bookDsc;
    this.bookImg=bookImg;
    this.price=price;
    this.quantity=quantity;
        }
}