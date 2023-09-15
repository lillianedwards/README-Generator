// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Welcome to the README Generator! What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Type a description for the project, including technical and design features and technologies used.",
    name: "description",
  },
  {
    type: "input",
    message: "Type the installation instructions for the project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Type the usage information for the project.",
    name: "usage",
  },
  {
    type: "input",
    message: "Type the contribution guidelines for the project.",
    name: "contribute",
  },
  {
    type: "list",
    message: "Which license are you using on this project?",
    name: "license",
    choices: ["MIT License", "BSD License", "GNU License"],
  },
  {
    type: "input",
    message: "What tests can be run on this application?",
    name: "tests"
  },
  {
    type: "input",
    message: "Please enter your GitHub URL for contact purposes.",
    name: "github",
  },
  {
    type: "input",
    message: "Please type instructions for those who may want to contact you about this project.",
    name: "contact",
  },
  {
    type: "input",
    message: "Please type your email for contact purposes.",
    name: "email"
  },
{
  type: "input",
  message: "Please give credit to anyone you worked on this project with or any sites you used for inspiration or assistance.",
  name: "credit",
}
];
// TODO: Create a function to write README file
function createReadMe(fileName, data) {
  const template = generateMarkdown(data);

  fs.writeFile(fileName, template, (err) => {
    err ? console.error(err) : console.log("Thank you for your information, checkout your new README.md in the output folder!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    createReadMe("./output/README.md", data);
  });
}

// Function call to initialize app
init();
