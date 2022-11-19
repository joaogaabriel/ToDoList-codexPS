const express = require("express");
const app = express();
const path = require("path")
const routes = require("./routes/routes");
const connectToDb = require("./database/db");

const port = 3000;


connectToDb();
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())

app.use(routes)



app.listen(port, () => console.log(`servidor rodado em http://localhost:${port}`));