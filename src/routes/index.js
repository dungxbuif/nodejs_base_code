const error = require('../middlewares/error');

module.exports = (app) => {
   app.use('/api', apiRouter);

   app.use(error);
};
