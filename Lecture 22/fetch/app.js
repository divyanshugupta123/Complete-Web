

fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b658d0420b6c43fd9e34beb23b833ee9')
    .then(function(response){
        // pura data nahi mila sirf header mila
        console.log(response);
        return response.json() //also returns a promise
    })
    .then(function(res){
        // ab json k resolve k andr pura data mil jaaega
        console.log(res);
    })
    .catch(function(err){
        console.log(err);

    })
    