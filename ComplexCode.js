/* 
   Filename: ComplexCode.js 
   Description: This code demonstrates a complex implementation of a bookstore application using JavaScript.
*/

// Database of books in the bookstore
const bookDatabase = [
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 25.99,
    quantity: 10
  },
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    price: 34.99,
    quantity: 5
  },
  // Add more books here...
];

// Class representing a Book
class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
}

// Class representing the Bookstore
class Bookstore {
  constructor(bookDatabase) {
    this.bookDatabase = bookDatabase;
    this.shoppingCart = [];
  }

  // Add a book to the shopping cart
  addToCart(bookTitle) {
    const book = this.findBook(bookTitle);
    if (book && book.quantity > 0) {
      this.shoppingCart.push(book);
      book.quantity--;
      console.log(`Book "${book.title}" added to the shopping cart.`);
    } else {
      console.log("Book not found or out of stock.");
    }
  }

  // Find a book in the database by title
  findBook(bookTitle) {
    return this.bookDatabase.find(book => book.title === bookTitle);
  }

  // Calculate the total price of the shopping cart
  calculateTotal() {
    let total = 0;
    for (const book of this.shoppingCart) {
      total += book.price;
    }
    return total;
  }

  // Display the shopping cart
  displayCart() {
    console.log("Shopping Cart:");
    for (const book of this.shoppingCart) {
      console.log(`- ${book.title} by ${book.author} | Price: $${book.price.toFixed(2)}`);
    }
    console.log(`Total: $${this.calculateTotal().toFixed(2)}`);
  }
}

// Create an instance of the Bookstore class
const bookstore = new Bookstore(bookDatabase);

// Add books to the shopping cart
bookstore.addToCart("JavaScript: The Good Parts");
bookstore.addToCart("Clean Code: A Handbook of Agile Software Craftsmanship");

// Display the shopping cart
bookstore.displayCart();