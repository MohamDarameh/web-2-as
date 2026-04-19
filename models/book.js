'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Author, {
        foreignKey: 'authorId',
        as: 'author'
      });
    }
  }

  Book.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    publishedYear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Authors', key: 'id' }
    }
  }, {
    sequelize,
    modelName: 'Book',
  });

  return Book;
};