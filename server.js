const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//database config
const {mongoose} = require('./db/mongoose');

//database models
const {user} = require('./models/user');
const {emp_user} = require('./models/emp_user');
const {application}= require('./models/applications');

//const {jobz} = require('./models/jobs');


//routes
const login = require('./routes/login');
const register = require('./routes/register');
const jobs = require('./routes/jobs');
const login_employer = require('./routes/login_employer');
const register_employer = require('./routes/register_employer');
const applications = require('./routes/applications');
const apply = require('./routes/apply');


var app = express();
var router = express.Router();
const port = 5000;
//middleware
//app.use(express.static(path.join(__dirname, 'public/ng-adminsystem/dist')));
app.use(bodyParser.json());
app.use((req, res, next) => {
	var now = new Date().toString();
	console.log(`Time: ${now} : ${req.method} ${req.url}`);
	next();
});

//apis
app.use('/login', login);
app.use('/register', register);
app.use('/jobs', jobs);
app.use('/login_employer', login_employer);
app.use('/register_employer', register_employer);
app.use('/applications', applications);
app.use('/apply', apply)
app.listen(process.env.PORT || port);

console.log('We are live on ' + port);