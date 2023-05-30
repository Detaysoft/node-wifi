// const { execFile } = require('child_process');
const sudo = require('sudo-prompt');

const env = require('../env');

module.exports = ({ cmd, args }) =>
  new Promise((resolve, reject) => {
    console.log(cmd, 'node wifi cmd');
    sudo.exec(cmd, args, { env }, (error, output) => {
      if (error) {
        reject(error);
      } else {
        resolve(output);
      }
    });
  });
