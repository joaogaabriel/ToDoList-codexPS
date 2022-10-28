const  moongose = require("mongoose")

const taskSchema = new moongose.Schema({
    task:{
        type: String,
        require: true
    },
    check:{
        type: Boolean,
        require: true
    },
    date:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = moongose.model("Task", taskSchema);