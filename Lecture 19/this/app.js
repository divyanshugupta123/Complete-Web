console.log('//////// this keyword //////////////');


// VERY VERY VERY IMPORTANT POINT REGARDING THIS KEYWORD

// 'this' kisko point kar raha hai yeh decide hoga aapki function calling/invocation se 


// five types of calling 

// 1) regular function calling
// function fun(){

// }
// fun()

// 2) method calling
// let obj = {
//     fn : function(){

//     }
// }
// obj.fn();


// 3) constructor invocation
// function fun(){

// }
// let obj1 = new fun();


// 4) indirect calling
// call()
// apply()
// bind()

// 5) arrow function
// const fun = ()=>{}




// 1
function fn() {
    console.log(this);
}
fn();

// whenever a javascript code is run a Global Execution Context is created along with a Global object is also created and in browser it is called Window (Global Object) it mean this will point to the Window object




// 2

let obj = {
    number: 2,
    fn: function () {

        console.log(this);
    }
};
let myfun = obj.fn();


// this is pointing to the object over which it is called

// 3

function Funn() {
    this.age = 20;

}
let a = new Funn();
console.log(a);
console.log(a.age);

// this will point newly created object


// 4
let ob = {
    b: 20,
    fn: function () {
        console.log(this);
    }

};
let ob2 = {
    b: 50
}
ob.fn();
console.log("//////////")

ob.fn.call(ob2);
ob.fn.call(ob,1,2,3,4)

// ob2 m koi method nahi hai fn naam se or agr hume ob2 m hi use krna hai to hum use aise call krenge now this will point ob2 


ob.fn.apply(ob2);
ob.fn.apply(ob,[1,2,3,4])

// this will also point to ob2

// so the differnece in call and apply is we can give more argument in case of call but in case of apply if we want to give more argument then we have to give argument in a array


console.log('/////////')
// bind

let ob3 = {
    fn3 : function(){
        console.log(this);
    }
};
let myfunn3 = ob3.fn3.bind(ob3);
myfunn3() //this is a regular calling so this ko point krna chahiye tha window ko but humne bind kr diya to ab vo sirf or sirf object ko hi point krega

//IMPORTANT : if we want this will point only on our choice