let licenseBadge;
let licenseLink;
// TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
if (license === "MIT License") {
licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
} else if (license === "BSD License") {
licenseBadge = "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)"
} else if (license === "GNU License") {
licenseBadge =  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
} else {
  licenseBadge = " "
}
};

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  if (license === "MIT License") {
    licenseLink = "[License: MIT](https://opensource.org/licenses/MIT)"
    } else if (license === "BSD License") {
    licenseLink = "[License]((https://opensource.org/licenses/BSD-3-Clause)"
    } else if (license === "GNU License") {
    licenseLink =  "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
    } else {
      licenseLink = " "
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}





// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title, description, installation, usage, contribute, license, tests, github, contact, email, credit}) 
  {
    renderLicenseBadge(license);
    renderLicenseLink(license);
return `# ${title}
${licenseBadge}
## Description

${description}

#


## Table of Contents

1. [Installation](#1.)
2. [Usage Information](#2.)
3. [Contributing](#3.)
4. [License](#4.)
5. [Tests](#5.)
6. [Questions](#6.)
7. [Credit](#7.)

#



## 1. Installation

${installation}

#



## 2. Usage Information

${usage}

#



## 3. Contributing

${contribute}

#



## 4. License

${license}
${licenseLink}
#



## 5. Tests

${tests}

#



## 6. Questions

Here is my GitHub Link: [${github}](${github})
If you need to contact me: ${contact} 
You can email me at: ${email}

#



## 7. Credit

${credit}
`;
}

module.exports = generateMarkdown;
