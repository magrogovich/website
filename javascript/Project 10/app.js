function submitForm() {
    var submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;
    alert("submitted")
}


function change(){
    var subbtn = document.getElementById('submitButton');
    subbtn.disabled = false;
}