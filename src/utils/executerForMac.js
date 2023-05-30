const { execFile } = require('child_process');
const sudo = require('sudo-prompt');
const env = require('../env');

module.exports = ({ cmd, args }) =>
  new Promise((resolve, reject) => {
    sudo.exec(`${cmd} ${args.join(' ')}`, {}, (error, output) => {
      if (error) {
        reject(error);
      } else {
        resolve(output);
      }
    });
  });
