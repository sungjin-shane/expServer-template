const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  // res.send('I am here, and OK')
  // res.render('./layouts/main')
  res.render('home')
})

module.exports = router
