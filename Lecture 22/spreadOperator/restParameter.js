function sum(a, b, c, ...num) {
    console.log(num)
    return a + b + c;
}

let ans = sum(1, 2, 3, 45, 5, 6, 67);
console.log(ans);

// restParameter must be in last parameter
