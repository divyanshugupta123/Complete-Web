const expr = require('express');
const app = expr();
const path = require('path');
const methodOverride = require('method-override')
app.use(methodOverride('_method')) //method overide ho raha hai 
const {v4 : uuid} = require('uuid');

let dummy = [
    {
        // id: 0,
        id:uuid(), // returns me a id in string format
        username: "Dev",
        Comment: "heelo ji"
    },
    {
        // id: 1,
        id:uuid(),
        username: "Divyanshu",
        Comment: "Han ji"
    },
    {
        // id: 2,
        id:uuid(),
        username: "aman",
        Comment: "hambe"
    }
]




app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(expr.static(path.join(__dirname,'public')));


app.get('/', (req, res) => {
    res.send("Root Route");
})




// task 1 displaying all the blogs
// we make a index.ejs
app.get('/blogs',(req,res)=>{
    res.render('index',{dummy});

})


// task 2 show a form for adding a new blog

app.get('/blog/new',(req,res)=>{
    res.render('new')

})


// task 3 actually add a new blog in DB
app.use(expr.urlencoded({extended:true}));

app.post('/blogs',(req,res)=>{
    // ab data aaya hoga new.ejs se to hum use req.body() m aaya hoga and ab hum middleware use krenge 
    // console.log(req.body);
    let{username,Comment} =req.body;
    // console.log(comment);
    dummy.push({id:uuid(),username,Comment})

    // IMPORTANT
    // res.render m hume path k liye / dene ki jrurat nahi hoti pr in case of redirect we have to give the proper path
    res.redirect('/blogs')
})



// task 4 to show info of 1 particular blog
app.get('/blogs/:id',(req,res)=>{
    let {id}=req.params
    // console.log(id)
    let founddummy = dummy.find(a=>a.id==id)
    res.render('show',{founddummy});

})





// 5 to get the form for editing a blog
app.get('/blogs/:id/edit',(req,res)=>{
    let{id} = req.params;
    let founddummy = dummy.find(a=>a.id == id);
    // console.log(founddummy);
    res.render('edit',{founddummy});
})

// 6 ab form aagya ab use reality m edit krna hai



// <!-- ab agar hum post ka use krenge to ek naya comment add ho jaaega jaise in case 3 m ho rha tha but hume add nahi krana hume to edit krna hai to hum use krenge put/patch ab hum edit k liye dono use krte hain put bhi or patch bhi to difference kya hai dono m difference hai bss put se sara ka sara data change ho jata hai or patch se kuch partial data change hota hai or is case m hume sirf comment ko change krna hai na ki username ko to hum use krenge app.patch() -->


// ab m kaam kr raha hu apne form k sath form m to bss  2 hi trah k method hote hain get ya fir post or edit k case m hume patch k sath kaam kr rhe hain to hume apne form k method post ko override (METHOD OVERRIDE) krna hogaa patch m jo ki npm package hai 

app.patch('/blogs/:id',(req,res)=>{
    let {id} = req.params;
    console.log(id)
    let founddummy = dummy.find(a=>a.id == id);
    console.log(founddummy)
    let {Comment} = req.body;
    // changing already present data to newly calculated data
    founddummy.Comment = Comment
    res.redirect('/blogs');
})



// task 7 delete a particular blog and then redirect

app.delete('/blogs/:id',(req,res)=>{
    let{id} = req.params;
    // console.log(id)
    let newDummy = dummy.filter((a)=>
       a.id != id
    )
    console.log(newDummy)
    dummy = newDummy;
    res.redirect('/blogs');
})



// ab isme glti hogi ab agar ek naya element add hua and mene phle wale ko delete kiya fir do elements ki id same ho jaaegi fir kisi ek ko delete krne pr dono same id wale delete ho jaaenge isliye we never hard code the id i.e. we don't give id like 0 1 2 we use a npm package uuid 


app.listen(8080, () => {
    console.log("server connected")
})