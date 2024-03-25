// xmlhttp is a constructor so we use new keyword

let req = new XMLHttpRequest();

// now we have to make a connection between client and a server using open() method and have two arguments frst a method hume data ka kya krna hai like get post etc or dusra hume kidhr se data lena hai mtlb API 

// connection ban gaya client and server k beech
req.open('GET','https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b658d0420b6c43fd9e34beb23b833ee9')

// ab request bhejni hai
req.send();

// ab ya to data sahi se mil jaaega ya fir usme koi error aaega to 2 method se usko handle krenge

// jab sahi se chlega
req.onload = function(){
    console.log(this, 'sahi se hua hai')
    let d = JSON.parse(this.response);
    // console.log(d)
    for(let i of d.data){
        
    }


}

// response k andr sab data present hota hai


// agr error aaya hoga
req.onerror = function(){
    console.log(this,'na bhai error aaya hai')
}


// and all the data is stored in the response part
