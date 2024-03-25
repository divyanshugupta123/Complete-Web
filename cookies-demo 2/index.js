const exp = require('express');
const app = exp();
const cookieParser = require("cookie-parser")



// app.use(cookieParser());
app.use(cookieParser('youneedabettersecret'));

app.get('/',(req,res)=>{
    console.log(req.cookies);
    // res.send(req.cookies) send me normal cookies
    // for signed cookies displaying
    res.send(req.signedCookies) // isse hume signed cookies mil jaaengi
})


// // cookies ko send kra kr dekhte hain send krta hai apne server

// // req k sath cookie attach hokr jati hai cookies key-value pair hai
// app.get('/setcookie',(req,res)=>{
//     res.cookie('mode','dark');
//     res.cookie('location','delhi');
//     res.cookie('username','divyanshu ')
//     res.send("Server sent you cookies")

// })


// // ab client pr hai to req ki body m hoga 
// // or jab server bhejta hai to vo res m jata hai

// app.get('/getcookie',(req,res)=>{
//     let {mode,location,username} = req.cookies
//     res.send(`my name is ${username} location is ${location} and theme is ${mode}`)
// })



// bydefault to yeh normal cookie ki trah react krta hai but hume btana pdhta hai ki signedcookie hai to hum object bhj dete hain
app.get('/getsignedcookies',(req,res)=>{
    res.cookie('name','dev',{signed:true});
    res.send('cookie send successfully')
})





app.listen(8080,()=>{
    console.log("SERVER CONNECTED AT PORT NO 8080")
})




// cookies is bekar hum use krenge signed cookies kyuki cookies secure nahi hoti to hum use krte hain signed cookies or usse bhi jda secure hoti hai session m kyuki session server side storage or signed cookies ko use krne k liye hume need hoti hai ek package ki jiska naam hota hai cookie-parser jo ki cookies k liye bhi hota hai pr hum signedcookies k liye ek string bhj dte hain