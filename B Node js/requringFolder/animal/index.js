// special file jab bhi hum apne folder ko require kar rahe hain to hum dekhenge us folder k andr special file jo ki index.js

// ab yeh special file hai to is folder k andr jitni bhi file hongi un sb ko yaha export kraenge
 
const dog = require('./dog');
const cat = require('./cat');


// ab folder ko require krte hi vo idhr aaega or empty object ko export kr dega

// module.exports = {dog,cat}

module.exports = 'hello divyanshu bhaiya'


// if there is no index.js file then folder require nahi hoga usme special file hi chahiye hogi