let p = 1;
let mn = 69;
console.log('this is Node JS')
function square(num){
    
    return num*num

}

let obj = {
    fN : "Dev",
    sN : "Gupta",
    age : 18,
    getName : function(){
        console.log(this.fN+" "+this.sN)
    }
}
console.log(p);
console.log(mn)
console.log(square(6));
console.log(obj.getName());


// return 2 path first where our node js installed and second on going process path
// console.log(process.argv);

// console.log(process.argv.slice(2))


let a = process.argv.pop();

for(let i = 1 ; i<=a ; i++ ){
    console.log(i);
}


// cwd stands for current working directory it's a function
// imp : yaha se aap project run kr rahe ho 

// cwd vo path return karega yaha hum khde hain 
// dirname vo path return karega yaha process run ho rha hai
console.log(process.cwd())
console.log(__dirname())