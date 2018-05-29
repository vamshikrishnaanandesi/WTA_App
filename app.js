
const express = require('express');
const app = express();
const db = require('./db');



const ApplicationFormController = require('./ApplicationForm/ApplicationFormController');
app.use('/ApplicationForm', ApplicationFormController );

const SubmittedApplicationFormController = require('./SubmittedApplicationForm/SubmittedApplicationFormController');
app.use('/SubmittedApplicationForm', SubmittedApplicationFormController );
module.exports = app;