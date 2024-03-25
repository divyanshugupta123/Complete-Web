// let p1 = new function(){

// }
// console.log(p1);
// // return a empty object


// function some(){

// }
// console.log(some());
// // return undefined

// async function some2(){

// }
// console.log(some2());
// // return a promise





async function fun() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3 sec ho gaye');
            resolve();
        }, 3000);
    })

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 sec ho gaye');
            resolve();
        }, 2000);
    })
    console.log('dono kaam ho gaye');
}
fun();

// async always work with await






