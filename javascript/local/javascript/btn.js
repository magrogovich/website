document.addEventListener('DOMContentLoaded',function(){
    
    btn = document.getElementById('btn')
    btn.addEventListener('mouseover',function(){
        btn.classList.add('btn-clicked')
    })
    btn.addEventListener('mouseout',function(){
        btn.classList.remove('btn-clicked')
    })
})


function print(){
    pass = document.getElementById('password')
    img = document.getElementById('lock')
    if(pass.type === 'text'){
        pass.type = 'password';
        img.src = 'assets/lock-solid.svg'
    }else{
        pass.type = 'text';
        img.src = 'assets/lock-open-solid.svg'
    }

}