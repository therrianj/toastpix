const { signedCookie } = require('cookie-parser');
var express = require('express');
var router = express.Router();
const { toastRow }  = require('../public/scripts/main')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let results = toastRow(50)
  const namesData = results
  res.render('index', { title: 'toastpix', gridArray1: namesData[0], gridArray2: namesData[1], gridArray3: namesData[2]});
})

router.get('/freshtoast', async function(req, res, next) {
  console.log(req.query.id)
  let results = toastRow(req.query.id)
  const namesData = results
  res.render('index', { title: 'toastpix', gridArray1: namesData[0], gridArray2: namesData[1], gridArray3: namesData[2]});
})

module.exports = router;
