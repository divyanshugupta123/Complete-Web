let btn = document.querySelector('button');
let bdy = document.querySelector('body');
let sec = document.querySelector('section');
let head = document.querySelectorAll('.h')

btn.addEventListener('click',()=>{
    bdy.style.backgroundColor = 'black';
    head.forEach((i)=>{
        i.style.color = 'white'
    })
})

let them = document.querySelector('.theme');

them.classList.toggle('theme');