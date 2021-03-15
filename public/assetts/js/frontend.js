//adding an event to the table events_db

const addEventButton = document.getElementById('add-btn');
addEventButton.addEventListener('click', (e) => {
  e.preventDefault();

  // All data comes from the input fields
  const newEvent = {
    title: document.getElementById('title').value.trim(),
    // eventType: document.getElementById('eventType').value.trim(),
    eventDate: document.getElementById('eventDate').value.trim(),
    eventDescription: document.getElementById('eventDescription').value.trim(),
    // vendors: document.getElementById('vendors').value.trim(),
    // teamLeader: document.getElementById('teamLeader').value.trim(),
    // teamLeaderEmail: document.getElementById('teamLeaderEmail').value.trim(),

  };
  console.log(newEvent)

  // Send POST request using the fetch API
  fetch('/api/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEvent),
  })
    .then((response) => { console.log(response) /*response.json()*/})
    .then((data) => {
      console.log('Success in adding event:', data);
      alert(`Adding event: ${newEvent.title}!`)
      location.reload();
    })
    

  // Dump the content of the input boxes
  document.getElementById('title').value = '';
  document.getElementById('eventType').value = '';
  document.getElementById('eventDate').value = '';
  // document.getElementById('eventDescription').value = '';
  // document.getElementById('vendors').value = '';
  // document.getElementById('teamLeader').value = '';
  // document.getElementById('teamLeaderEmail').value= '';
});

// fetch('/api/new' , {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   }
// }).then(response => response.json())
//   .then(data => console.log(data))
