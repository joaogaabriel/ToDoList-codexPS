const express = require("express");
const app = express();
const connectToDb = require("./database/db");


const port = 3000;


connectToDb();
app.set("view engine", "ejs")


app.get("/home", (req, res) => {
    res.render("index");
});


app.listen(port, () => console.log(`servidor rodado em http://localhost:${port}`));