// file 1
let p = Math.PI
console.log(p);
let ans1 = num => num*num
let ans2 = (a,b)=>{
    return a+b;
}

console.log(ans1(23))
console.log(ans2(2,3));

// export behaviour show karega require ddekhte hi
// by default exports an empty object {}

// module.exports ={};

module.exports = {pii:p,ans1,ans2}
// module exports is a object then why here the key and value not present
// jab key and value same hoti hain tb hum kisi ek ko use krte hain
