const expp = require('express')
const app = expp();
const path = require('path')




// ab humare server ko kaise pata chlega ki humne konsa templating engine use kr rahe hain to hum uske view engine ko set kr denge taaki pta chl jaaye hum ejs engine pr kaam kr rahe hain or iska by default path hota hai views to render krte time hume path dene ki jrurat nahi hai 

app.set("view engine","ejs");
// ab by default jo path set hota hai humare view wale folder ka vo hota hai process.cwd + /views pr agr hum kisi or folder m hue to hum kya krenge __dirname ka use isliye humne set kr diya path
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    // ab hum res.send() nahi krenge ab hum apne template ko render krenge
    res.render('index');
})

app.get('/random',(req,res)=>{
    // hum apne ejs wali file m jda logic wali cheejin nahi krenge logics ko hum idhr define krenge

    // logic likhne k baad ans ko template k andr bhej denge or use catch kr lenge
    let randomnumber = Math.floor(Math.random()*10)
    // res.render('random');
    res.render('random',{randomnumber});
})

app.listen(8080,()=>{
    console.log("server connected at port 8080")

})