const exp = require('express');
const app = exp();
const path = require('path');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(exp.static(path.join(__dirname,'public')));

// this is middleware which is used to show the form data post method se jo data aa raha hai use dikhane k liye hume yeh middleware use krna pdega kuki by default it is undefined so i use middleware 2 hote hain 1 json 1 urlencoded

app.use(exp.urlencoded({extended:true}));

app.use(exp.json())

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/user',(req,res)=>{
    res.send("<h1>Get request send successfully</h1>");
    console.log(req.query);
    let{username,age} = req.query;

})


app.post('/user',(req,res)=>{
    res.send("Post method k through");
    console.log(req.body);
})

app.listen(8080,()=>{
    console.log("Server connected at port number 8080");
})