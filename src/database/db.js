const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose
    .connect(
        "mongodb+srv://admin:admin@todolist.wfoaqm3.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("mongoDb Atlas conectado"))
    .catch((err) => console.log(err))
};

module.exports = connectToDb;