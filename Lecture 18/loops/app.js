// for loop
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        if (i == j) {
            continue;
        }
        else {
            console.log(`${i} and ${j}`);
        }
    }
}

// while loop
let num = 100;
while (num >= 0) {
    if (num % 10 == 0) {
        console.log(num);
    }
    num--;
}

// for-in used for iter the object
// and for-of loop is used to iter the iterable item like array , hashmap

// for-in
let o = {
    name:"Dev",
    age : 21,
    isMale : true
};
for(let i in o){
    console.log(o[i]);
}

// for of
let arr = ['dev','sam','rock','aman']
for(let item of arr){
    console.log(item)
}