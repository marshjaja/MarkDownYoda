const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/question");

// function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (error) => {
		if (error) {
			console.error("An error occurred while writing the file", error);
		} else {
			console.log(`${path.basename(fileName)} was successfully generated!`);
		}
	});
}

// function to initialize program
function init() {
	inquirer
		.prompt(questions)
		.then((answers) => {
			const createMarkdown = generateMarkdown(answers);
			const outputDir = path.join(__dirname, "output");
			if (!fs.existsSync(outputDir)) {
				fs.mkdirSync(outputDir);
			}
			writeToFile(path.join(outputDir, "README.md"), createMarkdown);
		})
		.catch((error) => {
			console.error("An error occurred:", error);
		});
}

// function call to initialize program
init();
