const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const User = require('./ApplicationForm');

// CREATES A NEW USER
router.post('/', (req, res) => {
    User.create({
            question_name : req.body.question_name,
            question_actual_answer : req.body.question_actual_answer,
            question_user_answered : req.body.question_user_answered,
        }, 
        (err, user) => { 
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', (req, res) => {
    User.find({}, (err, users)  => {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', (req, res) => {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// router.post('/user_answer', (req, res) => {
//     User.create({
//             question_user_answered : req.body.question_user_answered,
           
//         }, 
//         (err, user) => {
//             if (err) return res.status(500).send("There was a problem adding the information to the database.");
//             res.status(200).send(user);
//         });
// });

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/user_answered/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});

module.exports = router;

