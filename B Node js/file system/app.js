let fs = require('fs');
// console.log(fs);
// now using this object we perform CRUD create read update and delete

// create or write in a file system
// it accepets four arguments in which last two arguments are optional first is file name and second is data third is object and fourth is callback function
// fs.writeFile('abc.txt','hello divyanshu bhai kya kr rahe ho',{
//     encoding : 'utf-8',
//     flag :'w'
// },(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("file written successfully")
// });



// //////////////////

// read

// fs.readFile('abc.txt',{
//     encoding : 'utf-8',
//     flag:'r'
// },(err,data)=>{
//     if(err){throw err}
//     console.log(data);
// });



///////////////////////////////////

// update 

// fs.appendFile('abc.txt','hello bhai',{

// },(err)=>{
//     if(err){throw err}
//     console.log("update ho gaya")
// })

//////////////////////////////////////

// delete

fs.unlink('abc.txt',(err)=>{
    if(err){throw error}
    console.log("I delete the file");
})

// path is another module just same as file system
// path.join('dev','gupta','good','boy')
// output => 'dev/gupta/good/boy'

// it removes extra spaces from the path
// path.join('dev//////','///////////////gupta//','is','///a/good','boy')
//  output => 'dev/gupta/is/a/good/boy'
