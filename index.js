import fs from "fs";
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "motivation",
      message: "What is your motivation?",
    },
    {
      type: "input",
      name: "why",
      message: "Why did you build this project?",
    },
    {
      type: "input",
      name: "problem",
      message: "What problem does it solve?",
    },
    {
      type: "input",
      name: "learn",
      message: "What did you learn?",
    },
    {
      type: "input",
      name: "standout",
      message: "What makes your project stand out?",
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "input",
      name: "license",
      message: "What license are you using? (input N/A if not applicable)",
    },
    {
      type: "input",
      name: "badges",
      message: "What is your badge? (insert badge link)",
    },
    {
      type: "input",
      name: "features",
      message: "What features does your project have?",
    },
    {
      type: "input",
      name: "contribution",
      message: "How can others contribute to your project?",
    },
    {
      type: "input",
      name: "test",
      message: "What tests have you written for your application?",
    },
  ])
  .then((response) => {
    const readme = `# ${response.title}

    ## Description
        ${response.motivation}
        ${response.why}
        ${response.problem}
        ${response.learn}
        ${response.standout}

    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation
        ${response.installation}
    ## Usage
        ${response.usage}
    ## Credits
        ${response.credits}        
    ## License
        ${response.license}
    ## Badges
        ![Original Creator](${response.badges})
    ## Features
        ${response.features}
    ## How to Contribute
        ${response.contribution}
    ## Tests;
        ${response.test}`;
    fs.writeFile("README.md", readme, (error, data) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Success!");
      }
    });
  });
