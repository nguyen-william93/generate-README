// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None"){
    return "";
  }
  let temp = license.replace(/ /g, "%20");
  let badge = `[![License](https://img.shields.io/badge/License-${temp}-green)]`
  return badge;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return ""
  }
  const linkArr = []
  return `yoyoyoy`
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let temp = `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
  console.log(temp)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data.title} 👋
  ${data.license.map(license => renderLicenseBadge(license) + renderLicenseLink(license))}
  ## Description
  🔍 ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  💾 ${data.installation}
  ## Usage
  💻 ${data.usage}
  ## License
  ${data.license.map(license => renderLicenseSection(license))}
  <br />
  This application is covered by the ${data.license} license. 
  ## Contributing
  👪 ${data.contributing}
  ## Tests
  ✏️ ${data.test}
  ## Questions
  ✋ ${data.github}<br />
  <br />
  :octocat: Find me on GitHub: [${data.github}](https://github.com/${data.github})<br />
  <br />
  ✉️ Email me with any questions: ${data.email}<br /><br />
  _This README was generated with ❤️ by [README-generator](https://github.com/nguyen-william93/README-generator) 🔥🔥🔥_
      `;
}

module.exports = generateMarkdown;
