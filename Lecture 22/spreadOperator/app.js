let arr1 = [10,20,30]
let arr2 = [40,50,60]
// concat
// agr hum chahte hain humare arr1 k peeche arr2 join ho jaye to concat se kr skte hain pr yeh optimised way nahi hai 
// console.log(arr1.concat(arr2))

// spread operator -- modern way

arr2 = [...arr1,40,50,60]
console.log(arr2)


// spread operator can be for both array and opbject
let obj = {
    a : 10,
    b: 20,
    c: 30
}
let obj2  = {
    ...obj,
    d:40
}

console.log(obj2);

// now i want to remove the property b in obj
delete obj.b


// use of spreaad operator
let arr = [0,1,2,3,4,5,6]
console.log(Math.min(arr));// it will return me a NaN just because of the refernece for printing the minimum number among arr we use spread operator
console.log(Math.min(...arr))