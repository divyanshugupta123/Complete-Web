// if we want to manipulate a para then we use innertext

// 1): innerText
let para = document.querySelector('p');
console.log(para.innerText);





// 2): textContent
let para2 = document.querySelector('p');
console.log(para2.textContent);  




// innerText : a = it gives the text inside that tag    b = aware of CSS

// textContent : a = it also gives the text inside that tage    b = not aware of CSS




// 3) : innerHTML
let para3 = document.querySelector('p');
console.log(para3.innerHTML);

// it print as it is inside that specific tag



// these all methods are used to access the data then they are known as getters and also we can manipulate so also setter


console.log('/////////   SETTER   ///////////');



let p1 = document.querySelector('p');
p1.innerHTML = 'this is updated content of p1'



p1.innerText = 'this is updated content using innerText'
