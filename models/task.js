const Sequelize = require('sequelize');
const config = require('./../config');

const Task = config.define('task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

title: {
    type: Sequelize.INTEGER,
    allowNull: false
},
description: {
    type: Sequelize.INTEGER,
    allowNull: false
},
category: {
    type: Sequelize.INTEGER,
    allowNull: false
},
task_date: {
    type: Sequelize.INTEGER,
    allowNull: false
},
priority_level: {
    type: Sequelize.INTEGER,
    allowNull: false
},
progress_level: {
    type: Sequelize.INTEGER,
    allowNull: false
},

}, {timestamps: false});

module.exports = Task