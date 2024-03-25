// // promises are used to handle the problem created by callback like 'callback hell'

// // basically promises tackle the problem of calback hell

// // syntax

// // this Promise constructor have its two argument resolve and reject

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {

//         // let data = "this is a promise";
//         // resolve(data);

//         // let err = "something error occured"
//         // reject(err);

//         resolve('hi m reolve ho gaya ')

//     }, 3000)
// });

// // using new a object is created and Promise() return a promise

// // if our promise works then it is resolve and we can catch a resolve function using .then 

// promise.then(function(data){
//     console.log(data);
// })


// // if our promise not resolve then it is reject and we can catch a reject function using .catch

// promise.catch(function(err){
//     console.log(err);
// })





// let p1 = new Promise((resolve, reject) => {
//     console.log("wait for 3 sec")
//     setTimeout(() => {
//         resolve();
//     }, 3000)
// });

// p1.then().catch()

// p1.then(() => {
//     console.log("work done");
// })






// disadvantage of having promise in our code
// what if i return a promise inside our then or catch function let take an example


// this concept is called .then chaning



// i am returning a promise in .then so the code grow vertical kyuki hum then pr then chlate rhenge so we not use the promise 


let p1 = new Promise((resolve, reject) => {
    console.log("wait for 3 sec")
    setTimeout(() => {
        resolve();
    }, 3000)
});

p1.then(function () {
    return new Promise((resolve, reject) => {
        console.log("promise run krdiya hai lwt wait now");
        setTimeout(() => {
            console.log('2 sec lag gaye')
            resolve();
        }, 2000);
    })
})
    .then(() => {
        console.log("both work done");
    })

