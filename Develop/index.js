// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// array of messages for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title of your project?"
    },
    {
        name: "description",
        type: "input",
        message: "Enter a brief description for your project:"
    },
    {
        name: "install",
        type: "input",
        message: "Explain how to install your program:"
    },
    {
        name: "usage",
        type: "input",
        message: "Explain how to use your program:"
    },
    {
        name: "contribute",
        type: "input",
        message: "Explain how other people can contribute in your project:"
    },
    {
        name: "test",
        type: "input",
        message: "Explain how other people can test your program:"
    },
    {
        name: "license",
        type: "list",
        message: "Which of the following license would you like to use?",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            "The Unlicense"
        ]
    },
    {
        name: "username",
        type: "input",
        message: "Enter your github username:"
    },
    {
        name: "email",
        type: "input",
        message: "Enter your email address:"
    },
];

// function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, errorMsg => {
    if (errorMsg) {
        return console.log(errorMsg);
    }
});
}

// function to initialize app
async function init() {
    const input = await inquirer.prompt(questions);

    await writeToFile("GeneratedReadMe.md", generateMarkdown(input));
}

// Function call to initialize app
init();
