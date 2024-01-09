window.onload = function(){
    document.getElementById('nameUser').textContent = JSON.parse(localStorage.getItem('user')).name
    document.getElementById('lastUser').textContent = JSON.parse(localStorage.getItem('user')).lastname
    document.getElementById('dateUser').textContent = JSON.parse(localStorage.getItem('user')).date
    document.getElementById('emailUser').textContent = JSON.parse(localStorage.getItem('user')).email
    
}