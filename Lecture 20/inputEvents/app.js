let a = document.querySelector('input')
function fun(event){ // can be any name
    console.log(event)
    console.log(event.target.value);

    // IMPORTANT
    // event ek object hai jiske andr kaafi sari properties and methods hain unhi m se ek hai target or hume jab bhi target k andr ka content print krana hota hai hum use krte hain .value
    // console.log("input element executed")
}

a.addEventListener('input',fun)

// whenever an event is run/executed along with the function/event an object is also attached with it which we can have access of
// mtlb koi bhi jab bhi event chalega to ek object banegs jisko hum access kar skte hain


// ab is case m jab bhi hume input event triggered hua or fun function execute hua to ek object creaate hoga jise hum catch karenge apne function m kisi bhi naam se



// it will helps us to store the input data in h2

let inp = document.querySelector('input');
let h2 = document.querySelector('h2');
inp.addEventListener('input',function(e){
    h2.innerText = e.target.value;
})