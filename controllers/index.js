const router = require('express').Router();
const withAuth = ('./auth');

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Login route
router.get('login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  //otherwise, render the 'login' template
    res.render('login');
  });
  
module.exports = router;


