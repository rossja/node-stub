"use strict";
const router = require('express').Router({mergeParams: true});

router.route('/')
  .get(function (req,res) {
    console.log("/" + req.method);
    res.render('index');
  })
 
router.route('/about')
  .get(function(req,res){
    res.render('about');
  })

router.route('/users')
.get(function(req,res){
  res.render('users');
})

router.use('/api', require('./routes/api'));

router.route('*')
  .get(function(req,res) {
    res.render('404');
  })

  module.exports =router;