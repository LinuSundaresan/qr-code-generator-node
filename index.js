/* use inquirer npm package
use qr-image npm package
create text file to save user input using native fs module */

import inquirer from 'inquirer';
//var qr = require('qr-image');

inquirer
  .prompt([
    {
        message: "Type in your URL",
        name: "URL",
    },
    ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });