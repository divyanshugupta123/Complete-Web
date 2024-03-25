// let str = 'divyanshu is a good boy';

// it doesn't reflect the error it reflects the 'undefined' keyword
// console.log(str[100]);


// STRING METHODS

let str = 'Divyanshu';
console.log(str);

// 1) SUBSTR

// index 2 se lekr 4 lenegth tak ki print kar dega
console.log(str.substr(2, 4));
// negative index also accept in JS
console.log(str.substr(-5, 3));


// 2)SUBSTRING

console.log(str.substring(2));
// here 5 is not the length here 5 is index and it print from index 2 to index 5 and 5 is excluded here
console.log(str.substring(2, 5));


// it will print the same output of above because whenever the starting index is greater then the ending index then the swapping of indexies occurs;
console.log('////////////')
console.log(str.substring(5,2));

// whenever it encounters the -ve index it switches to 0 now it prints the 0,2
console.log(str.substring(-5,2));


console.log('//////////////')


// 3) INDEXOF

console.log('///////////')
console.log(str.indexOf('g'))

let name = 'divyanashu';

// if i want to print the index of second a in name string then 
// here we give the index 5 because the index 4 is not included so we have to give the index 5
console.log(name.indexOf('a',5));


// 4) REPLACE
// this will only replace the first occurence 
console.log(str.replace('a','z'));


//  5) REPLACEALL

console.log(str.replaceAll('a','#'));


//  6) REPEAT
console.log(str.repeat(3));


// 7) TOUPPERCASE

console.log(str.toUpperCase());

//  8) TOLOWERCASE
console.log(str.toLowerCase());


// 9) TRIM
console.log(str.trim());

