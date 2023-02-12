

const express = require('express');
const app = express();
const path = require('path');
const port = 5000;// Listen on Port 5000
const collection = require("./Model/mongodb");
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


app.get('', (req, res) => {
res.render('Home')
})

app.get('/Login', (req, res) => {
    res.render('Login')
})

app.get('/consulit', (req, res) => {
    res.render('consulit')
})

app.get('/Express', (req, res) => {
    res.render('Express')
})

app.get('/draw2', (req, res) => {
    res.render('draw2')
})

app.get('/write', (req, res) => {
    res.render('write')
})



app.post("/Login",async(req,res)=>{
    const data = {
        fname: req.body.fname,
        lname: req.body.lname,
        email01: req.body.email01,
        pass: req.body.pass,
        repass: req.body.repass,
        email02:req.body.email02,
        pass3:req.body.pass3
    }
    await collection.insertMany([data])
    res.render("Home2")
})

require("dotenv").config();

const port2 = process.env.PORT || 8080;

const auth = require ("./router/auth");

app.post('/Login', function(sReq, sRes) {
            var username = sReq.body.email02;
            var password = sReq.body.pass3;
    
            if (username=='myusername' && password == 'mypassword') {
                res.render("Home2")
                   // do something here with a valid login        
            } 
            else { 
                res.render("Login")
                   // user or password doesn't match
            }
    });

    
//navation
app.get('/', (req, res) => {
    res.render('Home')
    })
    app.get('/h', (req, res) => {
        res.render('Home2')
        })
    app.get('/Login', (req, res) => {
        res.render('Login')
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



