const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    var today = new Date();
    var currentDay = today.getDay();
 

var options ={
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
};

var day = today.toLocaleDateString('en-US', options);

    res.render('list', {
        kindOfDay: day
    })

    
});

app.post("/", function(req,res){
console.log(req.body.toDoList);
})


app.listen(3000, function () {
    console.log("The server is online on port 3000");
});