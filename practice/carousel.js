
let arr = [
    'https://images.unsplash.com/photo-1682687982298-c7514a167088?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', 

    'https://images.unsplash.com/photo-1704580104899-e99a78c4804b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8', 

    'https://images.unsplash.com/photo-1682687981974-c5ef2111640c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D', 
    
    'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFudW1hbiUyMGppfGVufDB8fDB8fHww'
]


let img = document.querySelector('img')

let n = 0;
setInterval(() => {
    img.setAttribute('src', arr[n])
    n = n+1;
    if(n==arr.length){
        n = 0;
    }
}, 3000)





