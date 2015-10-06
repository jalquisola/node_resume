var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var skills = [{label: 'Ruby on Rails', html_id: 'ror', x: 99, y:1, info: []},
    {label: 'NodeJS', html_id: 'nodejs', x: 95, y:5, info: []},
    {label: 'Linux', html_id: 'linux', x: 99, y:1, info: []},
    {label: 'Amazon Web Services', html_id: 'aws', x: 95, y:5, info: ['S3', 'EC2', 'RDS', 'OpsWorks']},
    {label: 'Javascript', html_id: 'javascript', x: 95, y:5, info: ['Backbone', 'React']},
    {label: 'Database', html_id: 'database', x: 95, y:5, info: ['MySQL','Postgres', 'MongoDB', 'Redis']},
    {label: 'Expert System', html_id: 'expert', x: 80, y:20, info: ['Drools']},
    {label: 'Testing Framework', html_id: 'testing', x: 95, y:5, info: ['Rspec','Capybara', 'Jasmine']},
    {label: 'Front-end Framework', html_id: 'front_end', x: 99, y:1, info: ['Bootstrap','UIKit', 'Foundation', 'MaterialUI']},
  ]

  res.render('index', { title: 'Joseph Rey Alquisola', skills: skills });
});

module.exports = router;
