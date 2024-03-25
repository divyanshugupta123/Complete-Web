
// 1 ) : Parent Element
let para1 = document.querySelector('#para1');

console.log(para1.parentElement.parentElement.parentElement)




// 2) : Child Element
let prnt = para1.parentElement;


console.log(prnt.children)

let collection = prnt.children;
for(let i of collection){
    i.style.color = 'red'
    i.style.fontSize = '30px';
}


// 3) : sibling

let di = document.querySelector('#div3')

console.log(di.nextElementSibling);

console.log(di.previousElementSibling);



