// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Title: Please enter the title of this project?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Description: Please enter a description of this project",
    name: "description",
  },
  {
    type: "input",
    message:
      "Installation Instructions: Please include installation instructions",
    name: "installInstructions",
  },
  {
    type: "input",
    message:
      "Usage Information: Please add usage information about this project here.",
    name: "usage",
  },
  {
    type: "input",
    message: "Contribution Guidelines: Please add contribution Guidelines here",
    name: "contribution",
  },
  {
    type: "input",
    message: "Test Instructions: Please add Test Instructions here.",
    name: "testInstructions",
  },
  {
    type: "checkbox",
    message: "Test Instructions: Please choose a license for this project",
    name: "license",
    choices: [
      "Apache",
      "GNU",
      "MIT",
      "Boost",
      "Eclipse",
    ],
  },
  {
    type: "input",
    message: "What is your GitHub user name",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "What is your email address",
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
