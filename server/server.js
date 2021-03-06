require ('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use (require('./routes/usuario'));


mongoose.connect(process.env.URLDB, 
                {useNewUrlParser: true, useCreateIndex: true}, (err,res) =>{

    if (err) throw err;
 
    console.log('Mongo ONLINE');
});
//mongoose.set('useCreateIndex', true);

app.listen(process.env.PORT, () => {
    console.log('Listening port :', process.env.PORT);
});