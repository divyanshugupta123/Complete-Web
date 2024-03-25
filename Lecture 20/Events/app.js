
// 1 ) : inline way
// function doSomething(){
//     console.log('button clicked');
    
// }


// this will help to show us whole detail in form of object
// console.dir('')





// //  2nd way
// let btn = document.querySelector('button');

// // onclick event
// btn.onclick = function(){
//     console.log("This is the 2nd way");
// }

// // onmouseenter event (hover)

// btn.onmouseenter = function(){
//     btn.style.backgroundColor = 'red';
// }

// // onmouseleave event
// btn.onmouseleave = function(){
//     btn.style.backgroundColor = 'white';
// }




// let btn = document.querySelector('button');

// function one(){
//     console.log('one');
// }

// function two(){
//     console.log('two');
// }


// btn.onclick = one;
// btn.onclick = two;




// i can work only with one function with a single button

// so if we want on click a same button more than one function run then we use eventLister : it allows you to run multiple events listener on the same element



// let btn = document.querySelector('button');

// function one(){
//     console.log('one');
// }

// function two(){
//     console.log('two');
// }

// btn.addEventListener('click',one); // it accepts 2 arguments first one event and second one is function

// btn.addEventListener('click',two);




// click krne pr body ka background color change ho jaye wala code


// let a = document.querySelector('button')


// function backcolor(){
//     let b = document.querySelector('body');
//     b.style.backgroundColor = 'blue';
// }

// a.onclick = backcolor;





// ondlclick : on double click
let btn = document.querySelector('button');

function merafunc(){
    console.log('it is a double click method')
}
btn.addEventListener('dblclick',merafunc)