const Sequelize = require('sequelize');
const database = require('../db');
 
const Conta = database.define('conta', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomedeusuario: { //Como usar o id que ja foi falado no usuario
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    numerodaconta: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
    },
    nomedaconta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    datadeabertura: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    saldo: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
})

module.exports = Conta;
