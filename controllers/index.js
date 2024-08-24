const router = require('express').Router();
//import middleware
const withAuth = require('../utils/auth.js');

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


  
module.exports = router;


