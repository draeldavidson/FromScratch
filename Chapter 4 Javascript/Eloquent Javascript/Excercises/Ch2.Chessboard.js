
let c = 8; // row or column count
// defining an empty string
let box = "";

for(let i = 0; i < c; i++) { // external loop
    if (i%2==0){
        for(let j = 0; j < c; j++) { // internal loop
            if (j%2==0) {
                box += " ";
            }else{
                box += "#";
            }
    }
}else{
        for(let k = 0; k < c; k++) { // internal loop
            if (k%2==0) {
                box += "#";
            }else{
                box += " ";
            }  
    }



  }
  // newline after each row
  box += "\n";
}
// printing the string
console.log(box);