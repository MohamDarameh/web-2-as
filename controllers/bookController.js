const { Book, Author } = require('../models');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ include: [{ model: Author, as: 'author' }] });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, {
      include: [{ model: Author, as: 'author' }]
    });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, genre, publishedYear, authorId } = req.body;
    const author = await Author.findByPk(authorId);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    const book = await Book.create({ title, genre, publishedYear, authorId });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    await book.update(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    await book.destroy();
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };