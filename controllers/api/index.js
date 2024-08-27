const router = require('express').Router()

//Api routes
const personRoutes = require('./personRoutes')
const trackingRoute = require('./tracking')
router.use('/tracking', trackingRoute)
router.use('/person', personRoutes)

module.exports = router
