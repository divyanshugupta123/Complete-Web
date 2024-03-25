// javascript is a synchronus , single thread , programming languages

// single thread means JS engine can execute a single thread on a single time


// what is synchronus : execution is done in order


// console.log('start'); 
// // if we want our method run after some delay then we use SetTimeout() which is inside the browser
// // it accept 2 parameter (()=>{},delay in millisecond) 
// console.log('run after 4 sec');
// console.log('end');



// console.log('start');
// setTimeout(function () {
//     console.log('run after 4 sec');
// }, 4000);
// console.log('end');



// if we set 2 timer then it will print the less time first 


console.log('//////////////////////');

console.log('start');
setTimeout(function () {
    console.log('after 0 sec');
}, 0);
console.log('end');




// more example is in practice folder with index7.html
