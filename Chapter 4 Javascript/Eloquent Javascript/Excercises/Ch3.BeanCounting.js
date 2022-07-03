let counter=0;
let count=0;


function countBs(str) {
    for (i=0; i<str.length; i++){
        if (str[i]=="B"){
            counter++
        }
    }
    console.log(counter);

}
console.log(countBs("BaBby"));


function countWhateves(word,char) {
    for (i=0; i<word.length; i++){
        if (word[i]==char){
            count++
        }
    }
    console.log(count);

}
console.log(countWhateves("Ominiomipia","i"));