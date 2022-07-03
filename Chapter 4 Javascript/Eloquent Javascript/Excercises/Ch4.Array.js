
function reverseArray(array) {
    var output = [];
    while (array.length) {
      output.push(array.pop());
    }
  
    return output;
  
}
console.log(reverseArray([8,7,6,5,4,3,2,1]));


console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);