document.addEventListener('DOMContentLoaded', function() {
    const buttons = documnt.querySelectorAll('.btn-details');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
         const targetModalID = button.getAttribute('data-bs-target');
        
        });
        const modal = document.querySelector(targetModalID);
    
        if(modal){
            const modalBS = new bootstrap.nodal(modal1);
            modalBS.show();
        }
    });
});