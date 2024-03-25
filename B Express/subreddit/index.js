const exp = require('express');
const app = exp();


// app.get('/',(req,res)=>{
//     res.send('root route hai')
// })

// app.get('/r/banana',(req,res)=>{
//     res.send('banana route hai')
// })

// app.get('/r/orange',(req,res)=>{
//     res.send('orange route hai')
// })

// app.get('/r/cat',(req,res)=>{
//     res.send('cat route hai')
// })
// app.get('/r/dog',(req,res)=>{
//     res.send('dog route hai')
// })
// aise to hume infinite route bnane pdh jaaenge isliye hum use krte hain yeh neeche diya hua method

// this changeddata is my key of my object 
app.get('/r/:changeddata',(req,res)=>{
    let {changeddata} = req.params;
    // console.log(req.params);
    res.send(`<h2>My route was ${changeddata}</h2>`)
})




app.listen(8080,()=>{
    console.log("Server connected")
})