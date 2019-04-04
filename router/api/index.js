const router = require('express').Router({ mergeParams: true })

router.route('/')
  .get(function (req, res) {
    // main route - handles default pathing for the API
    res.json({ status: 200, message: 'Welcome to the API' })
  })
  .post(function (req, res) {
    res.json({ status: 405, message: 'POST not allowed to this endpoint' })
  })

router.use('/v1', require('./v1.0.0'))

module.exports = router
