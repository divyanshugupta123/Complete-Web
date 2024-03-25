// now i want to add a div so i have to create it first so i pass it into this property

let a = document.createElement('div')

a.innerText = 'hello ji'


// for add a div so i have to append the child and it add in last 


let parent = document.querySelector('#dev');
// parent.appendChild(a);



// if i want to add muliple element then

let b = document.createElement('div');

b.innerText = 'ram ram ji';
// parent.appendChild(b);


// append child se hum ek ek krke add kar sakte hain ek sath nahi so we use .append method to add elements together


parent.append(a,b,'m string k through add hua hu');
// this is known as HTML+text


// agar starting m add krna hai to 
parent.prepend(b,'divyanshu is a good boy');