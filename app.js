

const express = require('express');
const app = express();
require("dotenv").config();
const path = require('path');
const port = 5000;// Listen on Port 5000
require("./config/db");
const User = require("./model/User");
const generateToken = require("./config/token.js");
const asyncHandler = require("express-async-handler");

const ejs = require("ejs");
const { required } = require('joi');

const templatePath = path.join(__dirname,'./views');

// Set View's
app.use(express.json())
app.set('views', templatePath);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));

// Static Files
app.use(express.static('public')); // Example for other olders
app.use('/css', express.static(__dirname + 'public/css'))

app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/images'));

/** email, password, fname, lname */
app.post('/register', asyncHandler(async (req,res)=> {
    const {  fname, lname, email, pass } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({message : "User already registered"});
    }
    console.log(fname, lname);
    //   ? create new user in the database
    const newUser = await User.create({
      email,
      fname, 
      lname,
      pass
    });
    //   ? response
    if (newUser) {
      res.status(200).json({
        user: {
          _id: newUser._id,
          fname: newUser.fname,
          lname: newUser.lname,
          email: newUser.email,
        },
        message: "User registered successfully",
        token: generateToken(newUser._id),
      });
    } else {
      res.status(400).json({message : "Server could not process the request"});
    }    
}));

const auth = require ("./router/auth");

app.post('/login', asyncHandler(async (req, res) => {
    const { email, pass } = req.body;
    const userExist = await User.findOne({ email:email });
    console.log(email, pass,userExist)
    if (userExist && userExist.pass === pass) {
        res.status(200).json({
          user: userExist,
          message: "user successfully logged in",
          token: generateToken(userExist._id),
        });
      } else {
        res.status(400).json({message : "Invalid email or password."});
      }
 }));

    
//navation
app.get('/', (req, res) => {
    res.render('Home')
    })
    app.get('/h', (req, res) => {
        res.render('Home2')
        })
    app.get('/login', (req, res) => {
        res.render('Login')
    })
    app.get('/register', (req, res) => {
        res.render('signup')
    })
    app.get('/program', (req, res) => {
        res.render('program')
    })
    app.get('/pro1', (req, res) => {
        res.render('pro1')
    })
    app.get('/pro2', (req, res) => {
        res.render('pro2')
    })
    app.get('/pro3', (req, res) => {
        res.render('pro3')
    })
    app.get('/consulit', (req, res) => {
        res.render('consulit');
        }); 
    app.get('/Express', (req, res) => {
            res.render('Express');
            });   
    app.get('/draw2', (req, res) => {
                res.render('draw2');
                }); 
    app.get('/write', (req, res) => {
                    res.render('write');
                    }); 
      app.get('/doit', (req, res) => {
       res.render('doit');
              }); 
            
app.listen(port, () => console.info(`App listening on port http://localhost:${port}`))



