const exp = require('express')
const app = exp()
const path = require('path');





app.set('view engine','ejs')
app.set('views',path.join(__dirname,"/views"))

// static files ko use krna hai
app.use(exp.static(path.join(__dirname,"/public")));


app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(8080,()=>{
    console.log("Server connected at port 8080");
})