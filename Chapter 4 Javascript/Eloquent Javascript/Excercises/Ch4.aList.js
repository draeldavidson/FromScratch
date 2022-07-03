//I BARELY UNDERSTAND  THIS
const arrayToList = (array1)=>{
    let list = null;
    for (let row = array1.length - 1; row>=0; row--){
        list ={value: array1[row], rest: list};
    }
    return list;

}
console.log(arrayToList([10,30,40]));

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }

  console.log(listToArray(arrayToList([10, 20, 30])));

  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }

  console.log(nth(arrayToList([10, 20, 30]), 1));