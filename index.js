// TODO: Include packages needed for this application
const fs = require("fs"); 
const { default: inquirer } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

const questions = [{
//make questions about read me :)
//license needs to be a multiple choice(3 choices)
}];

// TODO: Create a function to write README file
function createReadMe(fileName, data) {
const template = generateMarkdown(data);

  fs.writeFile(fileName, template ,(err) => {
    (err) ? console.error(err) : console.log("Thank you for your answers!")
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((data) => {
  createReadMe ("./output/README.md",data);

  }
  
  )
}

// Function call to initialize app
init();
