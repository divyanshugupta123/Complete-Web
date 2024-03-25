function dev() {

}
let name = dev();
console.log(name);



// CONSTRUCTOR  ek khud hi prototype hai 
//  ab agar m chahta hu apne protoytpe k andr kisi function ko add krna to vo aise hoga
function User(name , age) {
    this.name = name,
        this.age = age;
}

User.prototype.description = function(){
    return `hey my name is ${this.name}`
}



let user1 = new User('dev',13);
console.log(user1);


// new keyword before the function calling is creating this function as a constructor function whose task is to create a object

// convention : it is not compulsary but we have to use for a better practice to use constructor function name starts with capital alphadet