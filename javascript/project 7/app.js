function verif(){
    function containNumbers(elements){
        for (i = 0; i < elements.length;i++){
            if( 48 <= elements[i].charCodeAt() && elements[i].charCodeAt() <= 57){
                return true
            }
        }
        return false
    }

    function containChar(elements){
        for (i = 0; i < elements.length;i++){
            if( 65 <= elements[i].toUpperCase().charCodeAt() && elements[i].toUpperCase().charCodeAt() <= 90){
                return true
            }
        }
        return false
    }

    password = document.getElementById('password').value
    level = document.getElementById('level')
    
    elements = password.split('')
    console.log(password)
    
    if(elements.length < 8){
        level.textContent = 'Password Strength: Weak'
    }
    else if(elements.length >= 8 && containNumbers(elements) && containChar(elements)){
        level.textContent = 'Password Strength: Strong'
    }
    else if((elements.length >= 8 && containNumbers(elements)) || (elements.length >= 8 && containChar(elements))){
        level.textContent = 'Password Strength: Medium'
    }
}