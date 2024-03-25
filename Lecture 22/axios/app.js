
axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b658d0420b6c43fd9e34beb23b833ee9') //for retrivering the data

    // return me a promise 
    .then(function (res) {
        // console.log(res)
        console.log(res.data)
    }).catch(function (err) {
        console.log(err)
    })
// in case of axios pura data ek sath mil jaaega

