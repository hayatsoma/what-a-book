// Required Queries for WhatABook Project

// Query 1: Display a list of books
print("List of all books:");
db.books.find().forEach(printjson);

// Query 2: Display a list of books by genre
print("Books by genre:");
db.books.aggregate([
  { $lookup: { from: "genres", localField: "genreId", foreignField: "genreId", as: "genre" } },
  { $unwind: "$genre" },
  { $project: { title: 1, "genre.name": 1 } }
]).forEach(printjson);

// Query 3: Display a list of books by author
print("Books by author:");
db.books.aggregate([
  { $lookup: { from: "authors", localField: "authorId", foreignField: "authorId", as: "author" } },
  { $unwind: "$author" },
  { $project: { title: 1, "author.name": 1 } }
]).forEach(printjson);

// Query 4: Display a book by bookId
print("Book with bookId 1:");
db.books.find({ bookId: 1 }).forEach(printjson);

// Query 5: Display a wishlist by customerId
print("Wishlist for customerId 1:");
db.wishlist.find({ customerId: 1 }).forEach(printjson);

// Query 6: Add a book to a customer’s wishlist
print("Adding bookId 1 to wishlist for customerId 1:");
db.wishlist.updateOne(
  { customerId: 1 },
  { $addToSet: { books: 1 } },
  { upsert: true }
);

// Query 7: Remove book from a customer’s wishlist
print("Removing bookId 1 from wishlist for customerId 1:");
db.wishlist.updateOne(
  { customerId: 1 },
  { $pull: { books: 1 } }
);
