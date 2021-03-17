/* eslint-disable no-undef */
const express = require("express");
const db = require("./models")

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static("public"))

// eslint-disable-next-line no-undef
require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)


db.sequelize.sync({force: true}).then(() => {
    app.listen(PORT, function(){
        console.log("Server working")
    })
})

module.exports = app



