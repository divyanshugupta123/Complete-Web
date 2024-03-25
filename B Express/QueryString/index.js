const exp = require('express')
const app = exp();



app.get('/search',(req,res)=>{

    console.log(req.query);
    // console.log(req.query.search)
    let{search} = req.query;
    console.log(search);
    res.send(`<h1>You search about ${search}</h1>`)


})






app.listen(8080,()=>{
    console.log("Server Connected at port number 8080")
})