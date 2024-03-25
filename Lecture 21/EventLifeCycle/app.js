// important for interview

// when an event is triggered it undergoes into three phases 1) Event Capturing 2) Event Target 3) Event bubbling


let gp = document.getElementById('grandparent');
let p = document.getElementById('parent');
let child = document.getElementById('child');


// by default (without useCapture) it is in bubbling phase because first it print child --> parent --> GP

// now i set arguent of useCapture true now it is in Capturing phase

gp.addEventListener('click',(e)=>{
    console.log(e);

    console.log('Grand parent clicked')
},true)

p.addEventListener('click',(e)=>{

    // stop propagtion se vo next wale capture (child) pr nahi ja paaega
    // e.stopPropagation();
    console.log('parent Clicked')

},true)
child.addEventListener('click',(e)=>{
    console.log('child clicked');
},true)

// now when i touch my child element it propogates till the top most level trigerring all the levels means all the functions executed


// if i want to stop the propogation of child then there is a mthod in our event that is stopPropogation iske baad vo aage wale ko propgate nahi krega





// now addEventListener accepting a 3 argument third one is optional that is 'useCapture' which is returning a boolean value and by default is false

