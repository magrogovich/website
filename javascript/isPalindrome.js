word = prompt("enter a word:")

function isPalindrome(word){

    // Correction

    // revString = word.split('').reverse().join('')
    // return word === revString

    // Method 1

    // for(i = 0; i < word.length;i++){
    //     console.log(word[i])
    // }

    // Method 2

    // for(i = word.length - 1; i > -1;i--){
    //     console.log(word[i])
    // }

    // Method 3

    // Test = true

    // for(i = 0; i < word.length;i++){
    //     if (word[word.length - 1 - i] != word[i]){
    //         Test = false
    //     }

    // }

    // Method 4

    // Or : || / and : &&

    Test = true
    i = 0
    while (Test && i < word.length){
        if (word[word.length - 1 - i] === word[i]){
            i++
        }else{
            Test = false
        }
    }

    return Test
    
}


console.log(isPalindrome(word))

// isPalindrome(word)