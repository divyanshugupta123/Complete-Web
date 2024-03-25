let arr1 = [1, 2, 4, 5];
console.log(arr1);
console.log(arr1[3]);

// if i want to print the index which is out of range then it will reflect the undefiend;
console.log(arr1[10]);


let arr2 = [1, 2, 3, 'dev', 'pihu', 'divyanshu', null, undefined, true];
console.log(arr2);


// whenever we want to access the length of the array then we use the property either of method
console.log(arr1.length);

let ans = arr2[5];
console.log(typeof (ans));


// we can make a nested array in JS

let arr3 = [1.2,3,'dev',[10,11,12,[4,3]],'kartik'];
console.log(arr3[3][3][1]);


console.log('///////////////')

// push :: add at the last index and return the length of the array
let arr4 = [1,2,3,4];
console.log(arr4)
arr4.push(5);
console.log(arr4);


// pop :: remove from the last index
arr4.pop();
console.log(arr4);


// unshift :: add at the 0th index
arr4.unshift(0);
console.log(arr4);

// shift :: remove the element from the first index
arr4.shift();
console.log(arr4);


console.log('//////////////')



// slice :: non destrctive
let arr5 = [1,2,3,4,5,6,7,8,9];
console.log(arr5);
// print from 2nd indx to complete array
console.log(arr5.slice(2));
// here print from inx 2 to index 4 here the last index is not included
console.log(arr5.slice(2,5));
console.log(arr5)



console.log('splice')



// splice ::  this is the destructive method
// in this method here the last argument represent the length and remove the elements from the origional array
console.log(arr5.splice(2,3));
// now if we want to print the orignial array then the data is removed
console.log('kklkkl '+ arr5);




// split :: it is a string method returns an array
let url = 'https://google.com/search/cat/dog';
let ans1 = (url.split('/'));
console.log(ans1);



// join :: helps to join
console.log(ans1.join('/'));



// concatenate
let a = [1,2,3];
let b = [4,5,6];
console.log(a.concat(b));


// include
let c = [1,2,3];
console.log(c.includes(3));





