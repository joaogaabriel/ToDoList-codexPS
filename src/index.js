const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs")


app.get("/home", (req, res) => {
    res.render("index");
});

app.listen(port, () => console.log(`servidor rodado em http://localhost:${port}`));