const express = require('express')
// express returns me a function to use call krna pdega and when function runs it returns an enitre new object 
const app = express();

// now this app is an instance/object to our enitire application

console.log(app);

// app.listen accepts port number and a callback function

app.listen(8080,()=>{
    console.log("Server connected at port number 8080")
})