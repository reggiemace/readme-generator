// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Apache") {
    console.log("apache");
    license =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    return license;
  } else if (license == "GNU") {
    console.log("GNU");
    license =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
    return license;
  } else if (license == "MIT") {
    license =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return license;
  } else if ((license = "Boost")) {
    ("[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)");
    return license;
  } else if (license == "Eclipse") {
    license =
      "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    return license;
  }
  // If there is no license return an empty string
  else if (license == "None" || license == null) {
    license = " ";
    return license;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   //renderLicenseLink();
//   renderLicenseBadge(license);
//   return license;
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  // renderLicenseBadge();
  return `# ${response.projectTitle} 
  ${renderLicenseBadge(response.license)}
  ## Description
    ${response.description}
    
  ## [Table of Contents](#table-of-contents)
   * [Installation](#installation)
   * [Usage](#usage)
   * [Tests](#test)
   * [Contributing](#contributing)
   * [License](#license)
   * [Questions](#questions)
  
  
  ## Installation
  ${response.installation} 

  ## Usage
  ${response.usage} 
     
  ## License
  This application is covered under the ${
    response.license
  } license. To learn more about the the ${
    response.license
  } license, click on ${renderLicenseBadge(response.license)}.


  ## Contributing
  ${response.contributing}
 
  ## Test
  ${response.tests}  

  
  ## Questions
  Please send any questions about this application to me at:
   [GitHub/${response.githubUsername}](https://github.com/${
    response.githubUsername
  })
    
  For additional questions regarding this project, feel free to contact me at: 
  ${response.email}
  
   ### [Return to the Table of Contents](#table-of-contents)`;
}

module.exports = generateMarkdown;
