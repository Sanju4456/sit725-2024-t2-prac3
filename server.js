const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('index.html'); // Assuming you have a template engine set up for rendering HTML files
});

app.get('/', function (req, res) {
   
    res.json(response);
});

app.listen(port, () => {
    console.log('Express server started');
});
