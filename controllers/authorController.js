const { Author, Book } = require('../models');

// GET all authors
const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll({ include: [{ model: Book, as: 'books' }] });
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET single author
const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id, {
      include: [{ model: Book, as: 'books' }]
    });
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// POST create author
const createAuthor = async (req, res) => {
  try {
    const { name, email, nationality } = req.body;
    const author = await Author.create({ name, email, nationality });
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: error.message });
  }
};

// PUT update author
const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    await author.update(req.body);
    res.status(200).json(author);
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: error.message });
  }
};

// DELETE author
const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    await author.destroy();
    res.status(200).json({ message: 'Author deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor };