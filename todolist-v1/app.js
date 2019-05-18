const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

let items = ["Make food", "Eat food", "Clean dishes"];
let workItems = [];

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//This is the "/" section

app.get("/", function (req, res) {
   
    res.render('list', {
        listTitle: day,
        newListItem: items
    })
});

app.post("/", function (req, res) {
    let lists = req.body.toDoList;

    console.log(req.body);

    if (req.body.list === 'Work') {
        workItems.push(lists);
        res.redirect('/work')
    } else {
        items.push(lists);
        res.redirect('/');
    }

});

//This is the /work section

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItem: workItems
    });
})

app.post("/work", function (req, res) {
    let lists = req.body.toDoList;
    workItems.push(lists);
    res.redirect("/work")
})

//This is the about section

app.get("/about",function(req,res){
    res.render("about")
})

app.listen(3000, function () {
    console.log("The server is online on port 3000");
});