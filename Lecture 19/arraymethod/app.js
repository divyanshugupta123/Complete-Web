

// 1) : forEach : it accepts a call back function
// used for looping 

let arr1 = ['divyanshu', 'vikas', 'pihu', 'navneet', 'mani'];
arr1.forEach(function (item) {
    console.log(item);

});

console.log('**********************************************************');

arr1.forEach(function (item, index) {
    console.log(index, item);

});

console.log("//////////////////////////")


// 2) : map : it also accept a callback function and it returns a new array

let arr2 = [20, 15, 21, 28, 30, 2, 1, 25];
let newarray = arr2.map(function (item, index) {

    // return item/2;
    // if we want to return both item with index then we use 
    return [item * 2, index];
})

console.log(newarray);

console.log('**********************************************************');



// 3) filter : same as map , accept a callback also return a new array it only sends the truthful value to a new array

let arr3 = ['1', '2', '3', '4', '5'];
let filteredArray = arr3.filter(function (item) {
    if (item >= 3) {
        return true;
    }
    else {
        return false;
    }
})
console.log(filteredArray);

console.log('**********************************************************');


// 4) sort : lexicographical order m sort krega

let arr4 = [2, 1, 0, 100, 24, 80];
let arr5 = [2, 1, 0, 100, 24, 80];
let newArray = arr4.sort(); //lexical
let nwary = arr5.sort(function (a, b) {
    return a - b; // assc
    // return b-a; //desce

});
console.log(newArray);
console.log(nwary);
