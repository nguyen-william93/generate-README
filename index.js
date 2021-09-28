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
        message: "Provide instruction on how to use your project",
        validate: installationInput => {
            if (installationInput){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide any usage information",
        validate: usageInput => {
            if (usageInput){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmContribution",
        message: "Did you have any other colaborator?",
        default: false
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide any contribution from any other team member.",
        when: ({confirmContribution}) => {
            if (confirmContribution) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Provide any test instruction",
        validate: testInput => {
            if (testInput){
                return true;
            } else {
                return false
            }
        }
    },
    {
        type: "confirm",
        name: "confirmLicense",
        message: "Do you have any license or need to show any license?",
        default: true
    },
    {
        type : "checkbox",
        name: "license",
        message: "",
        when: ({confirmLicense}) =>{ 
            if (confirmLicense){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Provide your github username",
        validate: githubInput => {
            if (githubInput){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Provide your professional email",
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                return false;
            }
        }
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
      writeToFile ("./dist/README.md", readme, err => {
          if (err){
              console.log(err);
              return;
          }
          console.log("README was successfully created !!!");
      })
  })
}


// Function call to initialize app
init();
