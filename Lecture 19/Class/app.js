// classes are a syntantical sugar(better explanation) of constructor function


// this is a constructor

function Person(firstname, lastname, mail) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.email = mail
}

let p1 = new Person('dev', 'gupta', 'divyanshu@gmail.com');  // p1 is a object

console.log(p1);
console.log(p1.lastName);

// constructor khud hi ek prototype banaega or jab bhi hum ek function bnate hai to vo repeat hota rhta hai to hum us function ko prototype m daal dete hain

Person.prototype.printname = function () {
    console.log(`hello ${this.firstName} ${this.lastName}`)
}

Person.prototype.getName = function () {
    return (`${this.firstName} ${this.lastName}`)
}

console.log(p1.email);
console.log(p1.printname()); // in printname function we are not returning anything so it return undefined
console.log(p1.getName());










// now using class syntax

console.log('//////////////////// now here we go with class /////////////');


// first letter of class is also capital
class Detail {
    constructor(firstname, lastname, mail) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = mail
    }
    naamlekraaofunction() {
        return (`${this.firstName} ${this.lastName}`)
    }
    naamprintkrofunction() {
        console.log(`hello ${this.firstName} ${this.lastName}`)
    }
}
let p2 = new Detail('divyanshu', 'varshney', 'divyanshu@gmail.com')
console.log(p2);
console.log(p2.firstName);
console.log(p2.email);
console.log(p2.naamlekraaofunction());
console.log(p2.naamprintkrofunction());


// now if we want to make a function inside a class  so we can do like line 52 and line number 55


// if I have a same properties in more than one class then we use the concept of inheritance

console.log('///////// now inheritance ///////');

class Student extends Detail {
    constructor(firstname, lastname, mail, rollnumber) {
        super(firstname, lastname, mail);
        this.rno = rollnumber;
    }
    naamlekraaofunction() {
        return (`this method is present in local environement ${this.firstName} ${this.lastName}`);
    }
}

let s1 = new Student('ram', 'chandra', 'ramji@gmail.com', 34);
console.log(s1);
console.log(s1.firstName);
console.log(s1.email);

// now if i want to add some more property in inherited class then we have to override the constructor in student class line in line number 75

// now when we access any property of parent class in child class then we have to use the keyword super line number 76

console.log(s1.rno);
console.log(s1.naamlekraaofunction());

// class.__proto__ == Function.prototype and function.__proto__ == Object.prototype


// we can right same method in child class also see line number 79




