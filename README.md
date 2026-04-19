#  Authors & Books API

A RESTful API built with Node.js, Express, Sequelize ORM, and MySQL.
It manages Authors and their Books with a one-to-many relationship.



##  Project Description

This project is a backend REST API that allows you to manage Authors and Books.
Each Author can have multiple Books (one-to-many relationship).
Built with Node.js and Express for the server, Sequelize ORM for database management, and MySQL as the database.



## ⚙️ Setup Instructions

1. Clone the repository
   git clone https://github.com/yourusername/authors-books-api.git
   cd authors-books-api

2. Install dependencies
   npm install

3. Configure the database
   Open config/config.json and update your MySQL credentials:
   {
     "development": {
       "username": "root",
       "password": null,
       "database": "authors_books_db",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }

4. Create the database
   npx sequelize-cli db:create

5. Run migrations
   npx sequelize-cli db:migrate



##  How to Run the Project

   node server.js

Server will run on: http://localhost:3000



##  Description of All Available APIs

###  Authors Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | /api/authors     | Get all authors          |
| GET    | /api/authors/:id | Get single author by ID  |
| POST   | /api/authors     | Create a new author      |
| PUT    | /api/authors/:id | Update an author         |
| DELETE | /api/authors/:id | Delete an author         |

#### Sample Request — POST /api/authors
{
  "name": "ياسمين خليل",
  "email": "yasmin@example.com",
  "nationality": "فلسطينية"
}

#### Sample Request — PUT /api/authors/1
{
  "nationality": "فلسطينية - نابلس"
}



###  Books Endpoints

| Method | Endpoint      | Description            |
|--------|---------------|------------------------|
| GET    | /api/books    | Get all books          |
| GET    | /api/books/:id| Get single book by ID  |
| POST   | /api/books    | Create a new book      |
| PUT    | /api/books/:id| Update a book          |
| DELETE | /api/books/:id| Delete a book          |

#### Sample Request — POST /api/books
{
  "title": "رواية الأمل",
  "genre": "رومانسي",
  "publishedYear": 2023,
  "authorId": 1
}

#### Sample Request — PUT /api/books/1
{
  "genre": "دراما"
}
##  Tech Stack

- **Node.js** — Runtime
- **Express.js** — Web framework
- **Sequelize** — ORM
- **MySQL** — Database
- **Sequelize CLI** — Migrations & models