const router = require('express').Router();
//import middleware
const withAuth = require('../utils/auth');

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  //otherwise, render the 'login' template
    res.render('login');
  });
  
router.use('/', /* withAuth, */homeRoutes);
router.use('/api', apiRoutes);


  
module.exports = router;


