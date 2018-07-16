'use strict';
const chalk = require('chalk');
const Generator = require('yeoman-generator');

class Tictales extends Generator {
  writing() {
    console.log('Start ...');
    this.fs.copyTpl(this.templatePath(), this.destinationPath(), {});
  }
  install() {
    this.installDependencies({
      bower: false,
      yarn: { force: true },
      npm: false,
    }).then(() => {
      console.log(`
        ${chalk.green('Created successfully.\n')}
        ${chalk.grey('Launch app with "')}${chalk.cyan('yarn start')}${chalk.grey('"')}
      `);
    });
  }
}

module.exports = Tictales;
