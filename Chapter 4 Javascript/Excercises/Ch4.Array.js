
function reverseArray(array) {
    var output = [];
    while (array.length) {
      output.push(array.pop());
    }
  
    return output;
  
}
console.log(reverseArray([8,7,6,5,4,3,2,1]));