// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseName = license.replaceAll(" ", "_");
  const licenseSVG = "https://img.shields.io/badge/license-"+ licenseName +"-blue.svg";
  return licenseSVG;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseName = license.replaceAll(" ", "_");
  const licenseLink = "https://opensource.org/licenses/" + licenseName;
  return licenseLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  const licenseSVG = renderLicenseBadge(license);
  const linceseLink = renderLicenseLink(license);
  return `# ${data.title}

## Table of Content
[Description](#description) <br>
[Install](#installation) <br>
[Usage](#usage) <br>
[License](#license) <br>
[Contributing](#contributing) <br>
[Test](#test) <br>
[Questions](#questions) <br>

## Description
${data.description} <br>

## Installation
${data.install} <br>

## Usage
${data.usage} <br>

## License
### ${data.license}
[![${data.license}](${licenseSVG})](${linceseLink})

## Contributing
${data.contribute} <br>

## Test
${data.test} <br>

## Questions
### Contact Me
#### My GitHub: [${data.username}](https://github.com/${data.username})
#### My email:  [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
