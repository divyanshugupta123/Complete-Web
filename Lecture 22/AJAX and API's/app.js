// if i am sending a request using AJAX model then in return of request the response only contains JS part to ab naya html and naya CSS nahi bana to ek naya page nahi banega (SPA single page application) jisse MPA (multi page application) se bach jaaenge to vo reload nahi hoga or hum data ko manipulate krenge using DOM


let jsonData = `[
    {
        "id":1 , 
        "name":"John",
        "occupation":"software developer",
        "address":[]
    },
    {
        "id":2 , 
        "name":"Ajay",
        "occupation":"devops enginner",
        "address":[
            {
                "addressid":1,
                "city": "Delhi",
                "country": "india"
            }
        ]
    }

]`;

// now i want to use this data so we use a key
// this is a string and i cannot use . notation here
// now if we want to convert it in JS objct by which we can manipulate it we have 2 methods
// 1 ) parse 2 ) stringify
// i have a json string and i cannot work on it directly so we need to parse it first


let obj = JSON.parse(jsonData)
console.log(obj);

// now i do my operation on my obj
console.log(obj[0].occupation)


console.log( JSON.stringify(obj[0].occupation))