function getbool(item){
    return typeof item == 'boolean';
}

function check(item,fn){
    // here we call the function
    return fn(item)

}

// here getbool function is callback function

console.log(check(true,getbool))