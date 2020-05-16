const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


//middlewere start
//--serving static file css
app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// importing routes

const routes = require('./routes')(app);

//setting view engine 

app.set('view engine', 'ejs')

//listening port 

app.listen(port, () => {
    console.log('server is running' + port)
});