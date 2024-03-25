let obj1 = {
    a: 10,
    b: 20,
    c: 30,
    total: function () {
        return (10 + 20 + 30);
    }
}

// using this keyword

// after using this now  this will indicate the object and after . operator it will point towards that
let obj2 = {
    a: 10,
    b: 20,
    c: 30,
    total: function () {
        return this.a + this.b + this.c;
    }
}
console.log(obj2.total());

