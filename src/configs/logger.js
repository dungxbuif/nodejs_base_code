const chalk = require('chalk');

module.exports = {
   error: (text, e = '') => console.log(chalk.bold.red(text + e)),
   succeed: (text) => console.log(chalk.bold.green(text)),
   cyan: (text) => console.log(chalk.bold.cyan(text)),
   warning: (text) => console.log(chalk.bold.yellow(text)),
};
