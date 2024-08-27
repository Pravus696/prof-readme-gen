import fs from "fs";
import inquirer from "inquirer";


  function renderLicenseBadge(license) {
    if (license === 'MIT License') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache License 2.0') {
        return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GNU General Public License v3.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'BSD 3-Clause License') {
        return '[![License: BSD](https://img.shields.io/badge/License-BSD-green.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else {
        return 'No License Selected';
    }
};

function renderCreatorBadge(badge) {
  if (badge.startsWith("https://") || badge.startsWith("http://")) {
      return '[![Original Creator](${badge})]';
} else {
      return 'No Badge Added';
  }
};

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
      name: "credits",
      message: "List your collaborators, if any.",
    },
    {
      type: "list",
      name: "license",
      message: "What license are you using? (input N/A if not applicable)",
      choices: [
        "MIT License",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "BSD 3-Clause License",
        "N/A",
      ],
    },
    {
      type: "input",
      name: "badge",
      message: "What is your badge? (insert shields.io link)",
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
  - [Badges](#badges)
  - [Features](#features)
  - [How to Contribute](#contribute)
  - [Tests](#tests)

  ## Installation

  ${response.installation}

  ## Usage

  ${response.usage}

  ## Credits

  ${response.credits}        

  ## License

  ${renderLicenseBadge(response.license)}

  ## Badges

  ${renderCreatorBadge(response.badge)}

  ## Features

  ${response.features}

  ## How to Contribute

  ${response.contribution}

  ## Tests

  ${response.test}`;
    fs.writeFile("README.md", readme, "utf8", (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Success!");
      }
    });
  });


