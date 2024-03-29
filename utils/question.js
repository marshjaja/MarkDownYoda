// array of questions for user
const questions = [
	{
		type: "input",
		name: "title",
		message: "Please enter the title of your project:",
	},
	{
		type: "input",
		name: "description",
		message: "Please write a (short) description for your project:",
	},
	{
		type: "input",
		name: "github",
		message: "Please enter your GitHub username?:",
	},
	{
		type: "input",
		name: "email",
		message: "Please enter your email address:",
	},
	{
		type: "checkbox",
		name: "technologies",
		message:
			"Select the technologies used in your project. Navigate with up/down arrows and select with spacebar:",
		choices: [
			"Node.js",
			"Javascript",
			"JQuery",
			"HTML",
			"CSS",
			"React",
			"Python",
			"Django",
			"Next.js",
			"MongoDB",
			"Vue",
			"Angular",
			"Bootstrap",
			"Jest",
			"NPM",
			"",
		],
	},

	{
		type: "input",
		name: "installation",
		message: "Please enter installation instructions",
		default: "npm i",
	},
	{
		type: "input",
		name: "test",
		message: "Please enter testing instruction",
		default: "npm test",
	},
	{
		type: "input",
		name: "usage",
		message: "Please enter usage instructions",
	},
	{
		type: "input",
		name: "contributing",
		message: "Please enter guidelines to contribute to this project",
	},
	{
		type: "input",
		name: "contributors",
		message:
			"Enter the GitHub usernames of contributors to your project (separated by commas):",
	},
	{
		type: "input",
		name: "acknowledgments",
		message:
			"Enter any acknowledgments for your project. You can include website links in the format 'https://'. For GitHub users, use the format '[Name](https://github.com/username)':",
	},
	{
		type: "list",
		name: "license",
		message: "Please choose a license for your project",
		choices: [
			"MIT",
			"APACHE 2.0",
			"GPL 3.0",
			"BSD 3",
			"LGPL-3.0",
			"MPL-2.0",
			"None",
		],
	},
];

module.exports = questions;
