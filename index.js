const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const port = 8000;


const app = express();
app.use(express.urlencoded());
app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname,'views'));


app.use('/', require('./routes'));

app.listen(port, function(err){ 
  if(err){
    console.log('error in running the server');
  }
  console.log(`server is running on port : ${port}`);
});