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
      
      $("#well-section").append(` <div class="col s2 m4"> <div class="card card-style">
          <div class="card-content blue-grey lighten-5 blue-grey-text text-darken-4">
            <span class="card-title" id="cardTitle">${title}</span>
            <p id="cardContent">${category}</p>
            <p id="cardContent">${date}</p>
            <p id="cardContent">${description}</p>
            <p id="cardContent">${team_leader}</p>
            <p id="cardContent">${vendors}</p>
          </div>
          <div class="card-action">
            <a class="blue-text text-darken-4" href="/edit">Edit</a>
            <a class="blue-text text-darken-4" href="/cancel">Cancel</a>
          </div>
        </div>`);
        
    });
  });
