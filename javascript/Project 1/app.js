function verif(){
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    var email_element = email.split('')
    
    if (!email_element.includes('@') || !email_element.includes('.') || name === '' || password.length < 8){
        alert("false cred!")
        return false
    }else{
        return true
    }
}

