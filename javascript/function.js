function add(a,b){
    return a+b
}

add(1,2)


function isEven(a){
    if(a%2==0)
        console.log("number is even")
    else
        console.log("number is odd")
    
}

var a = 10;
function add(b){
    var num = 10;
    return num+b
}

var add = function(a,b){
    return a+b
}
add(1,3)

//es6
var add = (a,b) => {
    return a+b
}

add(1,2)






////////////////////////hoisting//////////////////////////////////
a =10;
var b=20;

jaya(a,b);

function jaya(a,b){
    return a+b
}

var a;
//////////////////////////////////////////////

var a;
var b;
function jaya(a,b){
    return a+b
}

a=10;
b=20;
jaya(a,b)

