/* eslint-disable no-undef */
//setting up 
const db = require("../models"); 


module.exports = function(app) {
  
  app.get('/api/new', (req, res) => {
    console.log("active")
    db.Events.findAll({})
    .then(data => {
      res.json(data)
    })
    .catch(err => res.json('error', {error: err}))
  })
      
  
  app.post ('/api/new' , (req, res) => {

    const addEvent = req.body;


    db.Events.create({
      title: addEvent.title,
      eventDescription: addEvent.eventDescription,
      eventDate: addEvent.eventDate,
    });
    res.status(200).json(addEvent);
  })
};