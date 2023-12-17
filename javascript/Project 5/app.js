function handleclick(){
    if(event.target.tagName === 'LI'){
        alert("clicked on: " + event.target.textContent)
    }
}

document.addEventListener("DOMContentLoaded",function(){
    container = document.getElementById('container')
    container.addEventListener('click',handleclick)
})