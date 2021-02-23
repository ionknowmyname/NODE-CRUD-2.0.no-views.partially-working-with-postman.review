const express = require("express");
const mongoose = require('mongoose');
const bodyparser = require("body-parser");

const EmployeeRoute = require('./routes/employee')


const app = express();
app.use(bodyparser.urlencoded({ extended: true }));     // to sort of activate bodyparser
app.use(bodyparser.json());


////////////////////  MongoDB Connection //////////////////////
mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
    if (!err) {
       console.log("MongoDB connection success"); 
    }else{
        console.log("Error in DB Connection: " + err);
    }
});
////////////////////////////////////////////////////////////////


app.use('/employee', EmployeeRoute)



//////////////////// Server start //////////////////
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{ 
    console.log(`server started on port ${PORT}`); 
});
/////////////////////////////////////////////////////