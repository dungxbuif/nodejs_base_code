const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();
const db = require('./configs/db');
const logger = require('./configs/logger');
const app = express();

//config app
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

db.connectDB();

const PORT = process.env.PORT || 1612;
//Thay đổi
app.listen(PORT, () => {
   logger.succeed(`Server running on http://localhost:${PORT}`);
});
