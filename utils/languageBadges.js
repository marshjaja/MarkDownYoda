function generateBadge(technologies) {
	const techBadges = {
		"Node.js":
			"![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)",
		Javascript:
			"![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)",
		JQuery:
			"![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)",
		HTML: "![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)",
		CSS: "![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)",
		React:
			"![React](https://img.shields.io/badge/React-%23323330?style=for-the-badge&logo=react&logoColor=blue)",
		"Next.js":
			"![Next.js](https://img.shields.io/badge/next.js-%23323330.svg?style=for-the-badge&logo=next.js&logoColor=white)",
		Python:
			"![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)",
		Django:
			"![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)",
		MongoDB:
			"![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)",
		Vue: "![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)",
		Angular:
			"![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)",
		Bootstrap:
			"![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)",
		Jest: "![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)",
		NPM: "![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)",
	};
	return technologies.map((tech) => techBadges[tech] || "").join(" ");
}

module.exports = generateBadge;
