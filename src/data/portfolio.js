import dzgShop from '../images/dzg-shop.png';
import nootka from '../images/nootka.png';
import portfolio from '../images/portfolio.png'


const portfolioData = { 
	"imageUrl": 'http://localhost:3000/',
	"logo": "images/app-logo.svg",
	"logoWhite": "images/app-logo-white.svg",
	"profession": "Front-end Developer",
	"intro": "Let's build amazing stuff.",
	"desc": "Producing high quality responsive websites and exceptional user experience.",
	"greeting": "Hi, I’m Franjo. Nice to meet you.",
	"about": "I just finished my Computer Science degree and looking for opportunity to sharpen my skills. I've done some freelance work for Wordpress agency, building websites for smaller businesses. I really enjoyed bulding and designing websites, so I started on specializing in more advanced stuff like Javascript and React. My passion became coding things from scratch and bringing my ideas to life. I'm quietly confident, naturally curious, and perpetually working on improving one skill at a time.",
	"projects": [
		{
			"id": 0,
			"title": "DZG Shop",
			"imageUrl": dzgShop,
			"link": "https://djido.github.io/dzg-shop/#/",
			"codeLink": "https://github.com/djido/",
			"description": "This project works with local data and it's inspired by official fan shop of my favourite football club. It basically display Dinamo Zagreb's popular products by categories.",
			"technology": ["HTML", "CSS", "React", "Context"]
		},
		{
			"id": 1,
			"title": "Personal Portfolio",
			"imageUrl": portfolio,
			"link": "https://github.com/djido/",
			"codeLink": "https://github.com/djido/",
			"description": "My personal portfolio built using React where I'm going to showcase informations about myself and projects I built. I have designed it and build it from scratch.",
			"technology": ["HTML","CSS", "SASS", "Javascript", "React"]
		},
		{
			"id": 2,
			"title": "Nootka Sound - a podcast production",
			"imageUrl": nootka,
			"link": "http://podcastproducer.org/",
			"codeLink": "",
			"description": "Nootka Sound is a website built for a professional podcast production facility. I have designed it for my client from Upwork. Website is built using popular CMS system - Wordpress.",
			"technology": ["CSS", "Javascript", "Wordpress"]
		}								
		],
	"skills": ["HTML", "CSS", "SASS", "Javascript", "React", "Redux", "Git", "Wordpress"]
}

export default portfolioData;