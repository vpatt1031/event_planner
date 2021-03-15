$(document).ready(function($) {
    
    

         
    function initializeForm () {
        //initialize all modals           
        $('.modal').modal();
            
        //or by click on trigger
        $('.trigger-modal').modal(); 

        // initialize multi select dropdowns
        $('select').formSelect();

        $('#submitFormBtn').click(() => submit())
    }            

    function submit () {
        event.preventDefault()
        const userInput = {}
        const formInputs = document.querySelectorAll('.formInput')
        formInputs.forEach(input => {
            let value = $(input).val()
            switch(value) {
                case (''):
                  value = null
                  break;
                case ('on'):
                    console.log("in on in switch case")
                  value = true
                  break;
                case ('off'):
                value = false
                break;
                default:
                    break
              }
            userInput[input['id']] = value
        })

        // make post api call here

        console.log("user input: ", userInput)
    }

    initializeForm()
        
 

});


