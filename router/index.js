const router = require('express').Router({ mergeParams: true })

// routing
router.route('/')
  .get(function (req, res) {
    res.render('index')
  })

router.route('*')
  .get(function (req, res) {
    res.render('404')
  })

router.use('/api', require('./api'))

module.exports = router
