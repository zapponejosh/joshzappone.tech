const { portfolioDB } = require('../db/db');

module.exports = (app) => {
  // home route
  app.get('/', (req, res) => {
    const projectArray = portfolioDB;
    const hbsObject = {
      projects: projectArray,
    };
    res.render('index', hbsObject);
  });
};
