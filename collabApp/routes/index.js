var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Collab - a platform for sharing code' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {title: 'Collab - a platform for sharing code'})
}); 

router.route('/contact')
  .get('/contact', function(req, res, next) {
    res.render('contact', {title: 'Collab - a platform for sharing code'})
  })
  .post('/thank', function(req, res, next) {
    res.render('thank', {title: 'Collab - a platform for sharing code'})
  })

module.exports = router;
