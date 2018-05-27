
var express = require('express');
var app = express();
var db = require('./db');



var ApplicationFormController = require('./ApplicationForm/ApplicationFormController');
app.use('/ApplicationForm', ApplicationFormController );

var SubmittedApplicationFormController = require('./SubmittedApplicationForm/SubmittedApplicationFormController');
app.use('/SubmittedApplicationForm', SubmittedApplicationFormController );
module.exports = app;