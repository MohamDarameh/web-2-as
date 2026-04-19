const express = require('express');
const app = express();

app.use(express.json());

const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');

app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Authors & Books API is running!' });
});

module.exports = app;