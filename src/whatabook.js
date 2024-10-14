// whatabook.js

// Author: Hayat Soma

// Sample Data
const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
    { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" }
];

const users = {};

// Function to register a user
function registerUser(username, password) {
    if (users[username]) {
        console.log("Username already exists!");
    } else {
        users[username] = { password: password, wishlist: [] };
        console.log("User registered successfully!");
    }
}

// Function to login a user
function loginUser(username, password) {
    if (users[username] && users[username].password === password) {
        console.log("Login successful!");
        return true;
    } else {
        console.log("Invalid username or password!");
        return false;
    }
}

// Function to browse books
function browseBooks() {
    console.log("Available books:");
    books.forEach(book => {
        console.log(`${book.id}: ${book.title} by ${book.author} (${book.genre})`);
    });
}

// Function to add book to wishlist
function addToWishlist(username, bookId) {
    if (users[username]) {
        const book = books.find(b => b.id === bookId);
        if (book) {
            users[username].wishlist.push(book);
            console.log(`${book.title} added to your wishlist!`);
        } else {
            console.log("Book not found!");
        }
    } else {
        console.log("User not logged in!");
    }
}

// Function to view wishlist
function viewWishlist(username) {
    if (users[username]) {
        console.log("Your wishlist:");
        users[username].wishlist.forEach(book => {
            console.log(`${book.title} by ${book.author}`);
        });
    } else {
        console.log("User not logged in!");
    }
}

// Sample usage
registerUser("Emma", "password123");
if (loginUser("Emma", "password123")) {
    browseBooks();
    addToWishlist("Emma", 1);
    viewWishlist("Emma");
}
