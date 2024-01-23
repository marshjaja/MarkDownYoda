const generateBadge = require("./languageBadges");

// function to generate markdown for README
function capitalizeTitle(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatContributors(contributors) {
	return contributors
		.split(",")
		.map(
			(username) =>
				`[${username.trim()}](https://github.com/${username.trim()})`
		)
		.join(", ");
}

function licenseBadge(license) {
	let licenseBadge = "";
	switch (license) {
		case "MIT":
			licenseBadge =
				"![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
			break;
		case "APACHE 2.0":
			licenseBadge =
				"![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
			break;
		case "GPL 3.0":
			licenseBadge =
				"![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
			break;
		case "BSD 3":
			licenseBadge =
				"![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
			break;
		case "LGPL-3.0":
			licenseBadge =
				"![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)";
			break;
		case "MPL-2.0":
			licenseBadge =
				"![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
			break;
		case "None":
			licenseBadge = "";
			break;
		default:
			licenseBadge = "";
	}
	return licenseBadge;
}

function generateMarkdown(data) {
	const contributorsFormatted = formatContributors(data.contributors);
	const technologyBadges = generateBadge(data.technologies);

	return `

# ${capitalizeTitle(data.title)}
- [Top](#top)

## Description
${data.description}

## Technologies Used
${technologyBadges}

## Table of Contents
- [Installation](#installation)
- [Test](#test)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)
- [License](#license)


## Installation
${data.installation}

## Tests
${data.test}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Contributors
${contributorsFormatted}

## Acknowledgments
${data.acknowledgments}

## Contact
For more information or inquiries about the project, feel free to contact me:
On GitHub: [GitHub: ${data.github}](https://github.com/${data.github})
Via Email: ${data.email}

## License
This project is licensed under the ${licenseBadge(data.license)} License

[**Return to Top**](#top)
`;
}

module.exports = generateMarkdown;
