// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (response.license == "Apache") {
    console.log("apache");
  }
  if (response.license == "GNU") {
    console.log("apache");
  }
  if (response.license == "MIT") {
    console.log("GNU");
  }
  if (response.license == "Boost") {
    console.log("Boost");
  }
  if (response.license == "Eclipse") {
    console.log("Eclipse");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.projectTitle}

        ## Description
        ${response.description}
      
  
        ## Table of Contents
         * [Installation](#installation)
         * [Usage](#usage)
         * [Contribution](#contribution)
         * [Test](#testInstructions)
         * [License](#license)
         * [GitHub username](#githubUserName)
         * [Contact Me](#email)
         ---
  
        ## Installation Instructions:
        ${response.installInstructions}
  
        ## Usage:
        ${response.usage}
  
        ## Contributions:
        ${response.contribution}
  
        ## Test Instructions:
        ${response.testInstructions}
  
         ## License:
         ${response.license}
  
        ## Questions
          Please send any questions about this application to me at:
           [GitHub username](https://github.com/${response.githubUsername}),
  
           For additional questions you can email me at: ${response.email}`;
}

module.exports = generateMarkdown;
