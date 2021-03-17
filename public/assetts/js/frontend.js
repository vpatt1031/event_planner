//adding an event to the table events_db

const addEventButton = document.getElementById('submitFormBtn');
addEventButton.addEventListener('click', (e) => {
  e.preventDefault();

  // All data comes from the input fields
  const newEvent = {
    title: document.getElementById('title').value.trim(),
    category: document.getElementById('category').value.trim(),
    date: document.getElementById('date').value.trim(),
    description: document.getElementById('description').value.trim(),
    team_leader: document.getElementById('team_leader').value.trim(),
    vendors: document.getElementById('vendors').value.trim(),
    

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
      location.reload();
    })
    

  // Dump the content of the input boxes
  document.getElementById('title').value = '';
  document.getElementById('category').value = '';
  document.getElementById('date').value = '';
  document.getElementById('description').value = '';
  document.getElementById('team_leader').value = '';
  document.getElementById('vendors').value = '';

// Function added to cancel button to delete event

const deleteEvent = (e) => {
  e.stopPropagation();

  console.log(e.target)

  const { id } = e.target.dataset;

  fetch(`/api/new/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
};
const event = {
  text: document.getElementById('newEvent').value.trim(),
};
// Delete button
const delBtn = document.createElement('button');
delBtn.classList.add('delete', 'btn', 'btn-danger');
delBtn.setAttribute('data-id', event.id);
delBtn.innerText = 'x';
delBtn.addEventListener('click', deleteEvent);






  
});


