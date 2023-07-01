const Sequelize = require('sequelize');
const database = require('../db');
 
const Pessoa = database.define('pessoa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    datadenascimento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.INTEGER
    },
    endereco: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.INTEGER
    },
    pessoa_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
})

module.exports = Pessoa;
