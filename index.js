// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "what is your name?"
    },
    {
        type: "input",
        name: "birthday",
        message: "when is your birthday?"
    },
    {
        type: "input",
        name: "description",
        message: "tell me something about yourself"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then(response => {
      console.log(response);
  })
}


// Function call to initialize app
init();
