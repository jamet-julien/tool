'use strict';
const chalk = require('chalk');
const Stream = require('stream');
const Generator = require('yeoman-generator');

const stream = new Stream.Transform({ objectMode: true });

stream._transform = function(data, unused, callback) {
  data.path = data.path.replace(/\/?_/g, '/.');
  callback(null, data);
};

class Project extends Generator {
  writing() {
    console.log('Start ...');
    this.registerTransformStream(stream);
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

module.exports = Project;
