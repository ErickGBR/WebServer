const express = require("express");
const hbs = require('hbs');
const app = express();
require("dotenv").config();
const port = process.env.PORT;


app.set('view engine', 'hbs');
app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home',{
        name:'Erick',
        title:'roadway app'
    })
})


app.get('/generic', (req, res)=>{
    res.render('generic',{
        content:'Awesome functionality of express',
        title:'roadway app'
    })
    //res.sendFile(__dirname +"/public/generic.html")
})

app.get('/elements', (req, res)=>{
    res.render('elements',{
        content:'This app is only for made example how need made a rest server with express',
        title:'roadway app'
    })
    //res.sendFile(__dirname +"/public/elements.html")
})

app.listen(port, ()=>{
    console.log("running")
})
