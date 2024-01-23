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

module.exports = licenseBadge;
