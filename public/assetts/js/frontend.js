const input = document.querySelector("#test")
const button = document.querySelector("#submit")

function sendData(){
    // console.log(input.value)
    let obj = {
        name: input.value
    }
    fetch("/api/post", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    })
}

button.addEventListener("click", sendData)