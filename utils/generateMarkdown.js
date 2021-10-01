// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return ""
  }
  return `https://img.shields.io/badge/license-${license}-important`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (!license){
//     return ""
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let arr =  data.license;
  console.log(arr.map(license => renderLicenseBadge(license)))
  return `# ${data.title} 
    ${data.description}
    ${data.installation}
    ${data.license.map(license => renderLicenseBadge(license))}`
  ;
}

module.exports = generateMarkdown;
