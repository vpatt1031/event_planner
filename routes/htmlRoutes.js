/* eslint-disable no-undef */
const path = require("path")

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
        // res.render("index", obj) to connect to handlebars
    })
}
