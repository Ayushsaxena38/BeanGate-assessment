const express = require('express');
const port = 8000;
const app = express();


//middleware for accessing and changing properties of req.body
app.use(express.urlencoded());
//for use static files
app.use(express.static('assets'));

//set up the ejs engine
app.set('view engine','ejs');

const db = require('./config/mongoose');


// app.get('/',((req,res)=>{
//     res.send("<h1>HI</h1>");
// }));

app.use('/',require('./routes/index'));

app.listen(port , function(err){
    if(err){
        console.log("error in setting up the server: ",err);
    }
    console.log("Server is UP and running on PORT :",port);
});