let n = 15
// for (let i =1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("fizz buzz");
//     }
//     else if (i % 5 == 0) {
//         console.log("buzz");
//     }
//     else if (i % 3 == 0) {
//         console.log('fizz');
//     }
//     else {
//         console.log(i);
//     }
// }

// it is not optimized just because the % operator is a heavy operator

// for (let i = 1; i <= n; i++) {
//     let str = '';
//     if (i % 3 == 0) {
//         str += "fizz";
//     }
//     if (i % 5 == 0) {
//         str += "buzz";
//     }
//     if(str == ""){
//         str += i
//     }
//     console.log(str);
// }



// best optimized

let cnt3 = 1;
let cnt5 = 1
for (let i = 1; i <= n; i++) {
    let str = "";
    if(cnt3 == 3){
        str+='fizz'
        cnt3 = 0;
    }
    if(cnt5 == 5){
        str +='buzz';
        cnt5 = 0;
    }
    if(str == ''){
        str+=i
    }
    console.log(str);
    cnt3++;
    cnt5++;
    
}