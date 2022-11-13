const  moongose = require("mongoose")

const userSchema = new moongose.Schema({
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,

    },
    date:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = moongose.model("User", userSchema);