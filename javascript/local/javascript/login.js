function login(){
    email = document.getElementById('email').value
    pass = document.getElementById('password').value

    stored = localStorage.getItem('user')
    storedUser = JSON.parse(stored)
    
    if(email === storedUser.email && pass === storedUser.password){
        window.location.href = "file:///Users/abdelhak/Developer/website/javascript/local/home.html";
    }else if(email === storedUser.email && pass != storedUser.password){
        document.getElementById('password').style.borderColor = 'red'
    }
    else if(email != storedUser.email){
        document.getElementById('email').style.borderColor = 'red'
        document.getElementById('password').style.borderColor = 'red'
    }

}