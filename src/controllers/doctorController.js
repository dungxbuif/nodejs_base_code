const doctorService = require('../services/doctorService');

const getTopDoctorHome = async (req, res) => {
   let limit = 10;
   if (req.query.limit && req.query.limit !== 'undefined') limit = +req.query.limit;
   try {
      let response = await doctorService.getTopDoctorHome(limit);
      return res.status(200).json(response);
   } catch (e) {
      console.log(e);
      return res.status(500).json({
         code: -1,
         message: 'Error from server',
      });
   }
};

const getAllDoctors = async (req, res) => {
   try {
      let response = await doctorService.getAllDoctors();
      return res.status(200).json(response);
   } catch (e) {
      console.log(e);
      return res.status(500).json({
         code: -1,
         message: 'Error from server',
      });
   }
};

const postInfoDoctor = async (req, res) => {
   try {
      let response = await doctorService.saveInfoDoctor(req.body);
      return res.status(200).json(response);
   } catch (e) {
      console.log(e);
      return res.status(500).json({
         code: -1,
         message: 'Error from server',
      });
   }
};

const getDetailDoctorByID = async (req, res) => {
   try {
      let info = await doctorService.getDetailDoctorByID(req.query.doctorID);
      return res.status(200).json(info);
   } catch (e) {
      console.log(e);
      return res.status(500).json({
         code: -1,
         message: 'Error from server',
      });
   }
};

const bulkCreateSchedule = async (req, res, next) => {
   try {
      let info = await doctorService.bulkCreateSchedule(req.body);
      return res.status(200).json(info);
   } catch (e) {
      console.log(e);
      return res.status(500).json({
         code: -1,
         message: 'Error from server',
      });
   }
};

const getScheduleDoctorByDate = async (req, res) => {
   try {
      let info = await doctorService.getScheduleDoctorByDate(+req.query.doctorId, +req.query.date);
      return res.status(200).json(info);
   } catch (e) {
      console.log(e);
      return res.status(500).json({
         code: -1,
         message: 'Error from server',
      });
   }
};

const getExtraDoctorInfoById = async (req, res) => {
   try {
      let info = await doctorService.getExtraDoctorInfoById(+req.query.doctorId);
      return res.status(200).json(info);
   } catch (e) {
      console.log(e);
      return res.status(500).json({
         code: -1,
         message: 'Error from server',
      });
   }
};

const getProfileDoctorInfoById = async (req, res) => {
   try {
      let info = await doctorService.getProfileDoctorInfoById(+req.query.doctorId);
      return res.status(200).json(info);
   } catch (e) {
      console.log(e);
      return res.status(500).json({
         code: -1,
         message: 'Error from server',
      });
   }
};

module.exports = {
   getTopDoctorHome,
   getAllDoctors,
   postInfoDoctor,
   getDetailDoctorByID,
   bulkCreateSchedule,
   getScheduleDoctorByDate,
   getExtraDoctorInfoById,
   getProfileDoctorInfoById,
};
