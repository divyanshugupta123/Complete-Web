// function somefunc(){
//     let name = 'divyanshu';
//     function printname(){
//         console.log(name);
        
//     }
//     return printname;
// }
// let a = somefunc();
// // console.log(a());
// a();

// // closures : a function bundled tpogether with reference to its sourrroundings state or lexical environment that is called closure




function anyfun(){
    let naam = 'dev';
    function printnam(){
        console.log(naam);
    }
    // printnam();
    return printnam;
}
let fun = anyfun();
// now closure will help us in consoling the name of person
fun();

console.log('//////////////////////////////////');

// real life example of Closure

// closure is used to make a private method
// before ES 6 there is no class concept so we use the concept of closures to make a method private 


// function counter(){
//     let count = 0;


//     function getcount(){
//         return count;
//     }
//     return getcount;
// }
// let counter1 = counter();
// console.log(counter1());


// we have to return multiple method so we use a object rather a function


// function counter(){
//     let count = 0;


//     return {
//         getcount : function(){
//             return count;
//         }
//     }
// }
// let counter2 = counter();
// console.log(counter2.getcount());



function counter(){
    let count = 0
    return {
        getCount : function(){
            return count;
        },
        increment : function(){
            count++;
        },
        decrement : function(){
            count--;
        },
        reset : function(){
            count = 0;
        }
    }
}
let storingfunc = counter();
console.log(storingfunc.getCount());
storingfunc.increment();
storingfunc.increment();
console.log(storingfunc.getCount());
storingfunc.decrement();
console.log(storingfunc.getCount());
storingfunc.decrement();
storingfunc.decrement();
console.log(storingfunc.getCount());
