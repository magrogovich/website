inputUser = prompt('enter a number:')

num = parseInt(inputUser)

function prime(num){

    if (num <= 1) return false

    for (i = 2; i <= Math.sqrt(num);i++){
        if (num % i === 0) return false
    }
    return true

}

console.log(prime(num))

15 +6
