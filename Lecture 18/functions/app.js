function sum() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}

sum();



// parameterized functions
function sum2(c) {
    let a = 10;
    let b = 20;
    console.log(a + b + c);
}
sum2(50);
sum2(30);


function sum3() {
    let a = 10;
    let b = 20;
    return a + b;
}

console.log(sum3());


function grad(num) {
    if (num >= 60) {
        return "pass";
    }
    else {
        return "fail";
    }

}
console.log(grad(91));



// functional expression
// storations of a function
let func = function iphone(){
    console.log("hey iPhone user");
}
func();



// IMPORTANT

// whenever i store the entire function inside a variable then it is called functional expression and first class function and first class citizen