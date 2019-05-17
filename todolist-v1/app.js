const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

var items = ["Make food", "Eat food", "Clean dishes"];

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    var today = new Date();

var options ={
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
};

var day = today.toLocaleDateString('en-US', options);

    res.render('list', {kindOfDay: day,newListItem: items})

    
});

app.post("/", function(req,res){
    var lists = req.body.toDoList;
    items.push(lists);

    res.redirect('/');
})


app.listen(3000, function () {
    console.log("The server is online on port 3000");
});