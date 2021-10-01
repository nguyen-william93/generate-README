// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateReadMe = require ("./utils/generateMarkdown")
const fs = require ("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: titleInput => {
            if (titleInput){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Description about your project",
        validate: descriptionInput => {
            if(descriptionInput){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Provide instruction on how to install your project",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide any usage information",
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide any contribution guidlines.",
    },
    {
        type: "input",
        name: "test",
        message: "Provide any test instruction",
    },
    {
        type : "checkbox",
        name: "license",
        message: "Choose your license.",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
    },
    {
        type: "input",
        name: "github",
        message: "Provide your github username"
    },
    {
        type: "input",
        name: "email",
        message: "Provide your professional email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, err => {
        if (err){
            return console.log(err);
        }
        console.log("README.md successfully created !!")
    })
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then(response => {
      return generateReadMe(response);
  }).then(readme => {
      console.log(readme);
      writeToFile ("./dist/README.md", readme, err => {
          if (err){
              console.log(err);
              return;
          }
          console.log("README was successfully created !!!");
      });
  });
};


// Function call to initialize app
init();
