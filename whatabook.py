# whatabook.py

# Author: Hayat Soma

import json

# Sample Data
books = [
    {"id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "genre": "Fiction"},
    {"id": 2, "title": "1984", "author": "George Orwell", "genre": "Dystopian"},
    {"id": 3, "title": "To Kill a Mockingbird", "author": "Harper Lee", "genre": "Fiction"}
]

users = {}

# Function to register a user
def register_user(username, password):
    if username in users:
        print("Username already exists!")
    else:
        users[username] = {"password": password, "wishlist": []}
        print("User registered successfully!")

# Function to login a user
def login_user(username, password):
    if username in users and users[username]["password"] == password:
        print("Login successful!")
        return True
    else:
        print("Invalid username or password!")
        return False

# Function to browse books
def browse_books():
    print("Available books:")
    for book in books:
        print(f"{book['id']}: {book['title']} by {book['author']} ({book['genre']})")

# Function to add book to wishlist
def add_to_wishlist(username, book_id):
    if username in users:
        book = next((b for b in books if b['id'] == book_id), None)
        if book:
            users[username]["wishlist"].append(book)
            print(f"{book['title']} added to your wishlist!")
        else:
            print("Book not found!")
    else:
        print("User not logged in!")

# Function to view wishlist
def view_wishlist(username):
    if username in users:
        print("Your wishlist:")
        for book in users[username]["wishlist"]:
            print(f"{book['title']} by {book['author']}")
    else:
        print("User not logged in!")

# Sample usage
if __name__ == "__main__":
    register_user("Emma", "password123")
    if login_user("Emma", "password123"):
        browse_books()
        add_to_wishlist("Emma", 1)
        view_wishlist("Emma")
