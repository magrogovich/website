function register(){
    localStorage.clear();
    name = document.getElementById('name').value
    lastname = document.getElementById('lastname').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    date = document.getElementById('date').value

    const user = {
        name:name,
        lastname,lastname,
        email:email,
        password:password,
        date:date
    }

    console.log(user)
    localStorage.setItem('user',JSON.stringify(user))
    
    
    window.location.href = "file:///Users/abdelhak/Developer/website/javascript/local/login.html";
    
}