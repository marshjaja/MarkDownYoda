// function to generate markdown for README

function capitalizeTitle(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
function generateMarkdown(data) {
	return `
  # ${capitalizeTitle(data.title)}

  # Description
  ${data.description}
  
  ## Table of Contents
- [Installation](#installation)
- [Test](#test)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)

# Installation
${data.installation}

# Tests
${data.test}

# Usage
${data.usage}

# Contributing
${data.contributing}

# License
${data.license}

`;
}

module.exports = generateMarkdown;
