const express = require('express');
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Set view engine and views directory
app.set('view engine', 'pug');
app.set('views', './views');

// Route for the home page of form.pug
app.get('/', function(req, res) {
    res.render('form'); // Make sure you have a 'form.pug' file in the 'views' folder
});

app.post('/', function(req,res){
    res.send("Name Is : "+req.body.name+ "email are : "+req.body.email);
})
// Start the server
app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});
