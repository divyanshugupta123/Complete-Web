const express = require('express')
const app = express();
const session = require('express-session');




app.use(session({
    secret: 'yeh hai secret key',
    resave: false,
    saveUninitialized: true,
    // yeh secure true https ka s wala part hai agr yeh nahi daalenge to yeh kaam krega as a http
    // cookie: { secure: true }
  }))

//   cookie k sath session id (sid) bhi jati hai 

app.get('/',(req,res)=>{
    res.send("welcome to session")
})

app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count+=1;
    }else{
        req.session.count = 1;
    }
    res.send(`you visited this site ${req.session.count} times`);
})


app.get('/setname',(req,res)=>{
    req.session.username = "Divyanshu gupta"
    res.redirect('/greet')
})

app.get('/greet',(req,res)=>{
    let {username = 'anonymousus'} = req.session;
    res.send(`hi from ${username}`)
})



app.listen(8080,()=>{
    console.log("Server connected at port 8080")
})