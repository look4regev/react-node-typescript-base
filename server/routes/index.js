var express = require('express');
const logger = require('pino')()

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  logger.info('hello world')
  const child = logger.child({ a: 'property' })
  child.info('hello child!')

  req.log.info("hi from req object")

  res.render('index', { title: 'Express' });
});

module.exports = router;
