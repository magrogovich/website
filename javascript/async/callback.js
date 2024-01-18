const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// function test(x){
//     if (x>= 0){
//         return true
//     }else{
//         return false
//     }
// }

const posNumbers = removeNeg(myNumbers,(x) => x >= 0)
console.log(posNumbers)

function removeNeg(numbers,callback){
    myArray = []
    for(x of numbers){
        if(callback(x)){
            myArray.push(x)
        }
    }
    return myArray;
}