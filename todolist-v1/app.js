const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

let items = ["Make food", "Eat food", "Clean dishes"];

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    let today = new Date();

let options ={
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
};

let day = today.toLocaleDateString('en-US', options);

    res.render('list', {kindOfDay: day,newListItem: items})

    
});

app.post("/", function(req,res){
    let lists = req.body.toDoList;
    items.push(lists);

    res.redirect('/');
})


app.listen(3000, function () {
    console.log("The server is online on port 3000");
});