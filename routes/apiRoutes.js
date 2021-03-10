const db = require("../models");

module.exports = function(app){
    app.post("/api/post", (req, res) => {
        console.log(req.body)

        db.Donut.create({
            name: req.body.name
        }).then(db => res.json(db))
    })
}
