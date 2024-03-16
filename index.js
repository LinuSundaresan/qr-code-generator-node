/* use inquirer npm package
use qr-image npm package
create text file to save user input using native fs module */

//import inquirer from 'inquirer';
const qr = require('qr-image');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        message: "Type in your URL",
        name: "URL",
    },
    ])
  .then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_image.png'));
    
    fs.writeFile('URL.txt', url , (err) => {
        if (err) throw err;
        console.log("File has saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });