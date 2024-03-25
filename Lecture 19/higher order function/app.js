function a(fun){
    console.log("hi i'm inside A");
    fun();
}
function b(){
    console.log("hi i'm inside B");   
}
a(b);

// condition 2

function c(){
    console.log("inside c");
    function d(){
        console.log("inside d");
    }
    return d;
}
c();