// Code here will dictate how the page displays all the events

fetch("/api/new", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success in grabbing event:", data);
    data.forEach(({ title, category, date, description, team_leader, vendors }, i) => {
      console.log(title);
      console.log(category);
      console.log(date);
      console.log(description);
      console.log(team_leader);
      console.log(vendors);
      console.log(i);
      
      $("#well-section").append(` <div class="col s2 m4"> <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title" id="cardTitle">${title}</span>
            <p id="cardContent">${category}</p>
            <p id="cardContent">${date}</p>
            <p id="cardContent">${description}</p>
            <p id="cardContent">${team_leader}</p>
            <p id="cardContent">${vendors}</p>
          </div>
          <div class="card-action">
            <a href="/edit">Edit</a>
            <a href="/cancel">Cancel</a>
          </div>
        </div>`);
        
      // Parent div for other elements
      // const sectionBreak = document.createElement('hr');
      // const wellSection = document.createElement('div');
      // wellSection.classList.add('well');
      // wellSection.classList.add('card');
      // wellSection.classList.add('blue-grey');
      // wellSection.classList.add('darken-1');

      // // // Add an ID so we can tell each character apart
      // wellSection.setAttribute('id', `character-well-${i}`);

      // // // Append the well to the well container
      // const wellContainer = document.getElementById('well-section');
      // wellContainer.appendChild(wellSection);

      // // Add all events
      // const nameEl = document.createElement('card-container')
      // nameEl.textContent = `Title: ${title}`;

      // const eventCategoryEl = document.createElement('card-container')
      // eventCategoryEl.textContent = `Event Category: ${category}`;

      // const eventDateEl = document.createElement('card-container')
      // eventDateEl.textContent = `Event Date: ${date}`;

      // const eventDescriptionEl = document.createElement('card-container')
      // eventDescriptionEl.textContent = `Description: ${description}`;

      // const eventVendorsEl = document.createElement('card-container')
      // eventVendorsEl.textContent = `Vendors: ${vendors}`;

      // wellSection.appendChild(nameEl);
      // wellSection.appendChild(eventCategoryEl);
      // wellSection.appendChild(eventDateEl);
      // wellSection.appendChild(eventDescriptionEl);
      // wellSection.appendChild(eventVendorsEl);
      // wellSection.appendChild(sectionBreak);
    });
  });
