// Code here will dictate how the page displays all the events

fetch('/api/new', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success in grabbing event:', data);
      data.forEach(({ title, eventDate, eventDescription }, i) => {
          console.log(title);
          console.log(eventDate);
          console.log(eventDescription);
          console.log(i);
        // Parent div for other elements
        // const sectionBreak = document.createElement('hr');
        const wellSection = document.createElement('div');
        wellSection.classList.add('well');
  
        // // Add an ID so we can tell each character apart
        wellSection.setAttribute('id', `character-well-${i}`);
  
        // // Append the well to the well container
        const wellContainer = document.getElementById('well-section');
        wellContainer.appendChild(wellSection);
  
        // Add all events
        const nameEl = document.createElement('card-container')
        nameEl.textContent = `Name: ${title}`;
  
        const eventDateEl = document.createElement('card-container')
        eventDateEl.textContent = `Event Date: ${eventDate}`;
  
        const eventDescriptionEl = document.createElement('card-container')
        eventDescriptionEl.textContent = `eventDescription: ${eventDescription}`;

  
        wellSection.appendChild(nameEl);
        wellSection.appendChild(eventDateEl);
        wellSection.appendChild(eventDescriptionEl);
        // wellSection.appendChild(sectionBreak);
      });
    });
  