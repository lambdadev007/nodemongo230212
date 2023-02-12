const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')
const auth = require("./middleware/authMiddleware");
const multer = require("multer")
// configure multer 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.png') 
    }
  })
  
  var upload = multer({ storage: storage })
// middleware to check if user is loogged in

isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/views/login')
}
//  login user view 
router.get('/login', (req,res)=> {
    res.render('views/login', {
        error: req.flash('error')
    })
})

// login post request 
router.post('/login',
  passport.authenticate('local.Login', {
    successRedirect: '/users/profile',
      failureRedirect: '/views/login',
      failureFlash: true })
      )


// sign up form 
router.get('/login', (req,res)=> {
    res.render('views/login', {
        error: req.flash('error')
    })
})

// sign up post request

router.post('/login',
  passport.authenticate('local.Login', {
    successRedirect: '/views/profile',
      failureRedirect: '/views/login',
      failureFlash: true })
      )

// progile 
router.get('/profile',isAuthenticated, (req,res)=> {

res.render('user/profile', {
    success: req.flash('success')
})
  

})

//upload user avatar



// logout user

/*router.get('/Logout', (req,res)=> {
    req.logout();
    res.redirect('/users/login');
})*/

module.exports = router