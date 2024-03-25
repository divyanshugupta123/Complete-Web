let obj = {
    person:"divyanshu",
    rollno:7,
    section:"Q"
};
console.log(obj);
console.log(obj.person);

// it will return you a 'undefined'
// console.log(obj[person]);

// now this object is store in the memory and they are stored in the form of string
console.log(obj['person']);

// object is passed by reference
let person = obj;
console.log(person.rollno);

