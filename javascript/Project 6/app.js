document.addEventListener("DOMContentLoaded",function(){
    element = document.getElementById('element')

    // element.addEventListener('mouseover',function(){
    //     element.classList.add('hover-effect')
    // })

    // element.addEventListener('mouseout',function(){
    //     element.classList.remove('hover-effect')
    // })

    element.addEventListener('mouseover',function(){
            element.style.backgroundColor = 'gray'
    })

    element.addEventListener('mouseout',function(){
        element.style.backgroundColor = 'white'
})


})