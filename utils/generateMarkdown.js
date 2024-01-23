const generateBadge = require("./languageBadges");
const licenseBadge = require("./licenseBadges");

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

function generateMarkdown(data) {
	const contributorsFormatted = formatContributors(data.contributors);
	const technologyBadges = generateBadge(data.technologies);

	return `

# ${capitalizeTitle(data.title)}


## Description
${data.description}

## Technologies Used
${technologyBadges}

## Table of Contents
- [Top](#top)
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
