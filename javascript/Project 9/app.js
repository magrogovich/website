
window.addEventListener('beforeunload', 

    function (event) {
        var unsavedChanges = true; 
        
        if (unsavedChanges) 
        {
            var message = 'You have unsaved changes. Are you sure you want to leave?';
            event.returnValue = message;
            return message;
        }
    }
);