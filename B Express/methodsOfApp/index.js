const func = require('express');
const app = func();

// adding app.use() or a middleware (harr ek incoming request se chlega)
// in app.use() it accepts a path which is an optional parameter and a callback function() 

// this is for all incoming request i.e. without path
// app.use((req,res)=>{
//     // console.log(req);
//     // console.log(res);
//     res.send('<h1>yeh raha response</h1>');
//     console.log("You made a request")
// })

// server stores two objects first is request objects and second is response object

// ab page sirf load load hota rhega pr kuch hoga nahi kyuki res ka wait kr rha hai user/borwser to response ko send krna pdega res.send()

// for a specific reuest we need a path ki bss usi path pr chle
// app.use('/baap',(req,res)=>{
//     res.send('han bhai m hu tera baap or bss baap wale path se hi chlunga')
//     console.log("You made a request at specific path")
// })


// for each incoming request you'll get the different response for this we use the concept of routing
// '/baap' k liye alag aaye '/maa' k liye alag





// //////////////////   METHODS     ////////////

// get

// it accepts path and a callback function
app.get('/',(req,res)=>{ //default path hota hai / or ise hum root path bhi bolte hain
    res.send('<h3>yeh mera "/" path hai </h3>')
}) 

app.get('/cat',(req,res)=>{
    res.send('<h3>This is a cat path</h3>')
})

app.get('/dog',(req,res)=>{
    res.send('<h3>This is a Dog Path</h3>')
})

app.get('/orange',(req,res)=>{
    res.send('<h3>This is a orange Path</h3>')
})

// ab agar hum /apple krenge jo ki define nahi hai to vo error dega to agr hum us error ko handle krenge that is handling a bad request

// use this always at the last
app.get('*',(req,res)=>{
    res.send('bad request');
})

// ab baar baar server ko restart krna pdh rha hai to hum use krenge nodemon ab nodemon file changes ko detect krega to fir yeh humare server ko automatically restart kr dega





app.listen(8080,()=>{
    console.log("server connected at port number 8080");
})