
function range(num1,num2) {
    for(i=num1; i<=num2; i++){
        console.log(i);    
    }
    return;
   
}
console.log(range(1,10));

let sum = 0;
function total(num1,num2) {
    for(i=num1; i<=num2; i++){
        sum += i;
    }
    return sum;

}
console.log(total(1,10));

function step(num1,num2,num3) {
    if (num3<0){
    for(i=num1; i>=num2; i+=num3){
        console.log(i);    
    }
}else if (num3>0){
    for(i=num1; i<=num2; i=i+num3){
        console.log(i);    
    }
}
   
}
console.log(step(1,22,3));

