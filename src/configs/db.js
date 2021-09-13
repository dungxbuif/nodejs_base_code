const { Sequelize } = require('sequelize');
const logger = require('./logger');

// require('dotenv').config();
// const mongoose = require('mongoose');
// const MONGO_URL = process.env.MONGO_URL

const sequelize = new Sequelize('mychess', 'root', null, {
   host: 'localhost',
   dialect: 'mysql',
   logging: false,
});

const connectDB = async () => {
   try {
      await sequelize.authenticate();
      logger.succeed('Connect to MySql successfully.');
   } catch (error) {
      logger.error(`Unable to connect to MySql: ${error}`);
   }

   // mongoose.connect(URL, {
   //          useNewUrlParser: true,
   //          useUnifiedTopology: true,
   //          useCreateIndex: true,
   //          useFindAndModify: false,
   //       });
   //       mongoose.connection.on('connected', () => {
   //          console.log(connected('Connect to MongoDB successfully !!!'));
   //       });
   //       mongoose.connection.on('error', (err) => {
   //          console.log(
   //             error(`Mongoose default connection has occured ${err} error`)
   //          );
   //       });
   //       mongoose.connection.on('disconnected', () => {
   //          console.log(
   //             disconnected('Mongoose default connection is disconnected')
   //          );
   //       });
};

module.exports = { connectDB };
