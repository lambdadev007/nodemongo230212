const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')
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
    res.redirect('/views/Login')
}
//  login user view 
router.get('/Login', (req,res)=> {
    res.render('views/Login', {
        error: req.flash('error')
    })
})

// login post request 
router.post('/Login',
  passport.authenticate('local.Login', {
    successRedirect: '/users/profile',
      failureRedirect: '/views/Login',
      failureFlash: true })
      )


// sign up form 
router.get('/Login', (req,res)=> {
    res.render('views/Login', {
        error: req.flash('error')
    })
})

// sign up post request

router.post('/Login',
  passport.authenticate('local.Login', {
    successRedirect: '/views/profile',
      failureRedirect: '/views/Login',
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