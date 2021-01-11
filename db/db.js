class Project {
  constructor(options = {}) {
    this.name = options.name;
    this.description = options.description;
    this.repoLink = options.repoLink;
    this.deployLink = options.deployLink;
    this.stack = options.stack;
    this.preview = options.preview;
  }
}

const portfolioDB = [
  {
    name: 'Gigi Zappone Counseling',
    description:
      'A marketing website built using NextJS and the Sanity CMS for a local counseling practice. Built with a focus on SEO to drive client inquiries. All content is created using the Sanity Studio.',
    deployLink: 'https://gigizapponecounseling.com/',
    preview: './assets/Images/GZC-preview.png',
    stack: [
      'ReactJs',
      'NextJs',
      'Sanity',
      'AWS Lambda',
      'Netlify',
      'Google Search Console',
      'CSS modules',
    ],
  },
  {
    name: '5 Sherpas',
    description:
      'This app generates weekly suggestions for constructive activities based on user profiles with the desired dimensions of life, such as wellness, career, and relationships among others, the user would like to focus on. Each week users get a new set of challenges and will see progress displayed on a gorgeous chart as challenges are completed.',
    repoLink: 'https://github.com/MVC-5/5sherpas',
    deployLink: 'https://www.5sherpas.com/',
    preview: './assets/Images/5sherpas-preview.png',
    stack: [
      'ReactJs',
      'MongoDB',
      'SemanticUI',
      'D3',
      'PassportJS',
      'Node/Express',
      'Heroku',
    ],
  },
  {
    name: 'Breakaway',
    description: 'A project to help facilitate a healthy company culture that celebrates employee self care and makes the process of taking PTO frictionless for managers and employees and maybe even a little fun!',
    repoLink: 'https://github.com/MVC-5/breakaway',
    deployLink: 'https://breakaway-vacay.herokuapp.com/',
    preview: './assets/Images/breakaway-preview.jpg',
    stack: ['Node.js', 'MySQL', 'Sequelize', 'Handlebars', 'Nodemailer', 'Cloudinary'],
  },
  {
    name: 'theDirectory',
    description: 'A ReactJS app using functional components and custom hooks to create a searchable and sortable table',
    repoLink: 'https://github.com/zapponejosh/thedirectory',
    deployLink: 'https://zapponejosh.github.io/thedirectory/',
    preview: './assets/Images/thedirectory-preview.png',
    stack: ['ReactJs', 'Custom hooks', 'Functional components'],
  },
  {
    name: 'The Office - Employee Tracker',
    description: 'Hire, fire, reassign, and more with thie command line employee tracker using mySQL and Node.js.',
    repoLink: 'https://github.com/zapponejosh/mysql-employee-tracker',
    preview: './assets/Images/the-office-preview.png',
    stack: ['Node.js', 'mySQL', 'Inquirer'],
  },
  {
    name: 'Discover Serenity',
    description: 'A project using data from APIs to find hikes for the user that may be less populated during a time when social distancing is important.',
    repoLink: 'https://github.com/calebkirkish/discover-serenity',
    deployLink: 'https://calebkirkish.github.io/discover-serenity/',
    preview: './assets/Images/serenity-preview.png',
    stack: ['SemanticUI', 'CSS Grid', 'APIs', 'jQuery'],
  },
  {
    name: 'BurgerBurger',
    description: 'A project using Express, MySQL, and Handlebars.',
    repoLink: 'https://github.com/zapponejosh/burgerburger',
    deployLink: 'https://bugerburger-restuarant.herokuapp.com/',
    preview: './assets/Images/burger-preview.png',
    stack: ['Node.js', 'Express', 'MySQL', 'Handlebars'],
  },
  {
    name: 'Day Planner',
    description: 'A basic app practicing the use of local storage, jQuery, and using momentjs.',
    repoLink: 'https://github.com/zapponejosh/hw-5-day-planner',
    deployLink: 'https://zapponejosh.github.io/hw-5-day-planner/',
    preview: './assets/Images/day-planner-preview.png',
    stack: ['jQuery', 'Bootstrap', 'Moment.js'],
  },
  {
    name: 'Weather Dashboard',
    description: 'A project using the Open Weather API praciting CSS Grid, local storage, and API calls.',
    repoLink: 'https://github.com/zapponejosh/hw-6-weather-app',
    deployLink: 'https://zapponejosh.github.io/hw-6-weather-app/',
    preview: './assets/Images/weather-preview.png',
    stack: ['CSS Grid/Flexbox', 'OpenWeather API', 'Geolocation', 'Moment.js'],
  },
];

module.exports = { portfolioDB, Project };
