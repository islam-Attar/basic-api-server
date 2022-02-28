'use strict';

const {Sequelize, DataTypes} = require('sequelize')
const food = require('./food');
const clothes = require('./clothes');
require('dotenv').config();

//prepare the connection to the database
const POSTGRES_URL = process.env.DATABASE_URL;

let sequelizeOptions = {dialectOptions: {
  ssl: {
      require: true,
      rejectUnauthorized: false,
  }
  }};
let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);




module.exports = {
  db: sequelize, // for connection and will use it in index.json
  Food: food(sequelize, DataTypes),  // for creating the table and will use in our route 
  Clothes: clothes(sequelize, DataTypes) // for creating the table and will use in our route 
}