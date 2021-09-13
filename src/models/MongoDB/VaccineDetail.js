const moment = require('moment');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Vaccine_detail = new Schema({
   sodiemtiem: { type: Number },
   tongmuidatiem: { type: Number },
   danso: { type: Number },
   dansotren18: { type: Number },
   tiemmui1: { type: Number },
   tiemmui2: { type: Number },
   phanphoithucte: { type: Number },
   phanphoidukien: { type: Number },
   somuitiemhomqua: { type: Number },
   tentinh: { type: String },
   matinh: { type: String },
});

module.exports = mongoose.model('Vaccine_detail', Vaccine_detail);
