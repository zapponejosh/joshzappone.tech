class Project {
  constructor(options = {}) {
    this.name = options.name;
    this.description = options.description;
    this.repoLink = options.repoLink;
    this.deployLink = options.deployLink;
    this.stack = options.stack;
  }
}

const portfolioDB = [
  {
    name: 'Breakaway',
    description: 'A project to help facilitate a healthy company culture that celebrates employee self care and makes the process of taking PTO frictionless for managers and employees and maybe even a little fun!',
    repoLink: 'https://github.com/MVC-5/breakaway',
    deployLink: 'https://breakaway-vacay.herokuapp.com/',
    preview: './assets/Images/breakaway-preview.jpg',
  },
  {
    name: 'Discover Serenity',
    description: 'A project using data from APIs to find hikes for the user that may be less populated during a time when social distancing is important.',
    repoLink: 'https://github.com/calebkirkish/discover-serenity',
    deployLink: 'https://calebkirkish.github.io/discover-serenity/',
    preview: './assets/Images/serenity-preview.png',
  },
  {
    name: 'BurgerBurger',
    description: 'A project using Express, MySQL, and Handlebars.',
    repoLink: 'https://github.com/zapponejosh/burgerburger',
    deployLink: 'https://bugerburger-restuarant.herokuapp.com/',
    preview: './assets/Images/burger-preview.png',
  },
  {
    name: 'Day Planner',
    description: 'A basic app practicing the use of local storage, jQuery, and using momentjs.',
    repoLink: 'https://github.com/zapponejosh/hw-5-day-planner',
    deployLink: 'https://zapponejosh.github.io/hw-5-day-planner/',
    preview: './assets/Images/day-planner-preview.png',
  },
  {
    name: 'Weather Dashboard',
    description: 'A project using the Open Weather API praciting CSS Grid, local storage, and API calls.',
    repoLink: 'https://github.com/zapponejosh/hw-6-weather-app',
    deployLink: 'https://zapponejosh.github.io/hw-6-weather-app/',
    preview: './assets/Images/weather-preview.png',
  },
];

module.exports = { portfolioDB, Project };
