const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/tuto2')
.then(()=>{
    console.log("DB Connected Successfully");
}).catch((err)=>{
    console.log(err)
})



// ab model bnana hai to model depend krta hai schema pr to phle schema bnaenge

// schema(blue-print) : accepts an object(key - value pair) defining datatype of our key 

const movieSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    year : Number,
    isWatched : Boolean
})


// collection / Model
// model(JS Class) : returns a class (is a JS Class)
// Model humsha singular rhega (Product not Products)
// model name alsways has its 1st letter capital

const Movie = mongoose.model('Movie',movieSchema);
// console.log(Movie);

// now movie1 is a document
const movie1 = new Movie({
    name:"IronMan",
    rating:5,
    year:2020,
    isWatched : true
})

movie1.save() // ab DB k andr jaakr save ho jaaega

console.log(movie1)
// ab mongo shell k andr collections m jakr find krenge to kuch nahi dikhega kyuki humne vs code pr kiya hai bss store nahi kraya line number 37


// movie1.create() ya fir movie1.insertOne() movie1.insertMany() krne se automatically use save kr deta 
