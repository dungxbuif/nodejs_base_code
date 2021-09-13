const logger = require('../configs/logger');

module.exports = (err, req, res, next) => {
   logger.error(err.message);
   res.status(500).json({
      code: 0,
      message: `Error from server. ${err.message}`,
   });
};
