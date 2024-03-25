// console.log(document);



// 1) : getElementsbyTagName


console.log(document.getElementsByTagName('h1'));
// it returns me an array

let arrofh1 = document.getElementsByTagName('h1')
console.log(arrofh1[0])
console.log(arrofh1[1])

for (let item of arrofh1) {
    console.log(item);
}

let arrofp = document.getElementsByTagName('p');
console.log(arrofp[1]);


// styling using DOM

for (let i of arrofp) {
    // console.log(i);
    i.style.color = 'red'
    i.style.border = '2px solid black'

}




// 2 ) : getElementbyId


// return a single element

console.log('///////////////')

let id = document.getElementById('dev')
console.log(id);
id.style.fontSize = '50px'



// 3) : getElementbyClassName

let clas = document.getElementsByClassName('paara')
console.log(clas)
// return an array

for (let item of clas) {
    console.log(item);
    item.style.color = 'orange'
}


// we can not use push and pop shift and unshift in this DOM


// 4): query selector : always return a single element

// using queryselector we can select above three that is element using name of the tag, class using (.) , and id using (#)



console.log("/////////////////////")
// imp : it doesnot return an array it return first occurence 
let a = document.querySelector('h1');
console.log(a);

// same this also will return first and single .paara class
let b = document.querySelector('.paara');
console.log(b);


let c = document.querySelector('#dev');
console.log(c);



console.log("**************")

// now if we want to return all then we use 
// 5): queryselectorall 


// IMPORTANT : it return a NODELIST (basically an array);

let aa = document.querySelectorAll('h1');
console.log(aa);


let bb = document.querySelectorAll('.paara');
console.log(bb);