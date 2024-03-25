let art = document.querySelector('article');
console.log(art);
art.classList.add('dev','divyanshu');
// we can also add seprately like
art.classList.add('vikas');

art.classList.remove('divyanshu')



// toggle agar property phle se hogi to hata degi or nahi hogi to lga degi

art.classList.toggle('toggle');


// contains : returns a boolean value

console.log(art.classList.contains('dev'))

console.log(art.classList.contains('divyanshu'))







