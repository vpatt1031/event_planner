$(document).ready(function($) {

    $(function () {
    
            //initialize all modals           
            $('.modal').modal();
    
            //now you can open modal from code
            $('#modal1').modal('open');
    
            //or by click on trigger
            $('.trigger-modal').modal();
    
        });
});

// function toggleModal() {
//     var instance = M.Modal.getInstance($('#modal1'))
//     instance.open()
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const box = document.querySelector(".modal");
//     M.Modal.init(box,{});
// })