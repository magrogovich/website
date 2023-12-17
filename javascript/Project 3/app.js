function togglePassword(){
    password = document.getElementById('password')
    checkbox = document.getElementById('checkbox')

    password.type = checkbox.checked ? 'text':'password'
}