"use strict";

const bodyParser = require('body-parser');
const router = require('express').Router({ mergeParams: true });

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// api version 1 routes

router.route('/')
  .get(function (req, res) {
    res.json({ status: 200, message: 'Welcome to API version 1.0.0' });
  });

router.route('/users')
  .get(function (req, res) {
    res.status(200).json({ status: 200, message: 'OK' });
  })
  .post(function (req, res) {
    res.status(200).json({ status: 200, message: "OK" })
  });

router.route('/users/:userid')
.get(function (req, res) {
  res.status(200).json({ status: 200, message: 'OK' });
})

module.exports = router;