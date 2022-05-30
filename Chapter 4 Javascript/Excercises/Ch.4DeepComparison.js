
function deepEqual(obj1,obj2) {
    if (typeof(obj1)===typeof(obj2)){


    if (obj1===obj2){
        return "true";        
    }else{
        return "false";
    }
}else{
    return "false"
}
}

console.log(deepEqual(1,1));
console.log(deepEqual(10,1));
console.log(deepEqual(10,"ten"));

