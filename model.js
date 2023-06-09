const sequelize = require('./database');
const Sequelize = require('sequelize');
const Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        notNull: true,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    stock: {
        type: Sequelize.NUMBER
    }
})
module.exports = Book