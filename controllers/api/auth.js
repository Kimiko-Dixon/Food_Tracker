// Middleware/JS for login
const router = require('express').Router();

const withAuth = (req, res, next) => {
    if (!req.session.loggedIn){
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = withAuth;