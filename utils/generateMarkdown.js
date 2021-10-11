// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None"){
    return "";
  }

  return `[![License](https://img.shields.io/badge/License-${license}-green)]`;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return ""
  }
  const linkArr = ["https://www.gnu.org/licenses/licenses.en.html","https://www.mozilla.org/en-US/MPL/2.0/","https://opensource.org/licenses/MIT","https://www.boost.org/users/license.html", "https://unlicense.org/", "https://www.apache.org/licenses/LICENSE-2.0"];
  for (let i  = 0; i < linkArr.length; i++){
    if (linkArr[i].includes(license)){
      return `${linkArr[i]}`
    }
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  ${renderLicenseBadge(license)}
  This code is cover under the license of [${license}](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #${data.title} 👋
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
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  <br />
  This application is covered by the ${data.license} license. 
  ## Contributing
  ${data.contributing}
  ## Tests
  ✏️ ${data.test}
  ## Questions
  ${data.github}<br />
  <br />
  :octocat: Find me on GitHub: [${data.github}](https://github.com/${data.github})<br />
  <br />
  ✉️ Email me with any questions: ${data.email}<br /><br />
  _This README was generated with  by [README-generator](https://github.com/nguyen-william93/README-generator)_
      `;
}

module.exports = generateMarkdown;
