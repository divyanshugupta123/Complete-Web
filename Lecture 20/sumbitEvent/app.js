

let a = document.querySelector('form')

a.addEventListener('submit', function (e) {
    e.preventDefault(); //default behaviour rok deta hai now it stops refreshing
    console.log('form submitted')
    // it will print in some fraction of time after it this is a default behaviour of form...it is empty coz browse reload it...and if we want to stop it then we use the property of this event property
})



// accessing the elements of form
// form have a property 'elements'  

a.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(a.elements)
    console.log(a.elements[0].value);
})