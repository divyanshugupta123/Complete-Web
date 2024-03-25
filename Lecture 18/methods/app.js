let obj = {
    a: 10,
    b: 20,
    c: 30,
    total: function () {
        return (10 + 20 + 30);
    }
}

// when we are not return from our function then it will return undefined

// we have to give the paranthesis if we want to call the method
console.log(obj.total());
