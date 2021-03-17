/* eslint-disable no-undef */
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

    const allDayEvents = document.querySelectorAll('.fc-daygrid-day-events')
    console.log(allDayEvents)
    
    const allCalenderDays = document.querySelectorAll('.fc-daygrid-day')
    // // allCalenderDays.filter(calenderDay => {
    // //     return calenderDay.getAttribute('data-date') === '2021-03-10'
    // });

    // console.log(allCalenderDays[0])
    console.log(allCalenderDays)

});


