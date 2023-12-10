elementRes = document.getElementById('res')
const xInput = document.getElementById('x')
const yInput = document.getElementById('y')

document.getElementById('add').addEventListener('click',() => perform('add'))
document.getElementById('min').addEventListener('click',() => perform('min'))
document.getElementById('mult').addEventListener('click',() => perform('mult'))
document.getElementById('div').addEventListener('click',() => perform('div'))
document.getElementById('rest').addEventListener('click',() => perform('rest'))


function perform(operation){
    x = parseInt(xInput.value)
    y = parseInt(yInput.value)

    switch (operation){
        case 'add':
            elementRes.value = x + y
            break
        case 'min':
            elementRes.value = x - y
            break
        case 'mult':
            elementRes.value = x * y
            break
        case 'div':
            elementRes.value = x / y
            break
        case 'rest':
            elementRes.value = x % y
            break
    }
    
}

