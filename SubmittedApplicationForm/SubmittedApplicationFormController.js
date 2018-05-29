const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const User = require('./SubmittedApplicationForm');
const Submit = require('../ApplicationForm/ApplicationForm');
                              


// CREATES A NEW USER
// router.post('/', function (req, res) {
//     User.create({
//             question_user_answer : req.body.question_user_answer,
           
//         }, 
//         function (err, user) {
//             if (err) return res.status(500).send("There was a problem adding the information to the database.");
//             res.status(200).send(user);
//         });
// });

router.get('/', (req, res) => {
    Submit
    .find()
    .select("_id question_name question_actual_answer question_user_answered")
    .populate('user_details')
    .exec((err, user) => {
        if (err) return res.status(500).send("Tere was a problem finding the user.");
        if (!user) return res.status(404).send("No user found");
        res.status(200).send(user);
    });
});

module.exports = router;