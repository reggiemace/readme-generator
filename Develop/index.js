// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of this project?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "What is the description of  this project?",
    name: "description",
  },
  {
    type: "input",
    message: "How to install this project?",
    name: "installation",
  },
  {
    type: "input",
    message: "How is this project used?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What license does this project use? (ex, MIT, Apache)",
    name: "license",
    choices: ["Apache", "GNU", "MIT", "Boost", "Eclipse", "None"],
  },
  {
    type: "input",
    message: "How can you contribute?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What are the test instructions for this project?",
    name: "tests",
  },

  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw error;
    }
    console.log("The file was saved");
  });
}

// TODO: Create a function to initialize app(err)
function init() {
  inquirer.prompt(questions).then((response) => {
    const markDown = generateMarkdown(response);
    console.log(markDown);
    writeToFile("README.md", markDown);
  });
}

// Function call to initialize app
init();
