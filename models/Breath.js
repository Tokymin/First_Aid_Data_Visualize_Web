const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Breath = sequelize.define('Breath', {
    devCode: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    time: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    controlId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    identifierName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ppeak: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    pmean: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    peep: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    pplat: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    vtiTotal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vteTotal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mvispn: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    mvespn: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rsbi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ie: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fiO2: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cdyn: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cst: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'breath',
    timestamps: false
});

module.exports = Breath;
