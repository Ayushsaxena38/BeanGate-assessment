const mongoose = require('mongoose');//mongodb+srv://ayushsaxena38:Ayush%4012345@cluster0.dwrztdb.mongodb.net/
mongoose.connect('mongodb://127.0.0.1:27017/BeanGate_db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
});
console.log('inside mongoose.connect');
const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log('Successfully connected to database');
})

module.exports = db;