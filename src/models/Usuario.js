const  moongose = require("mongoose")


const usuarioSchema = new moongose.Schema({
    nome:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    senha:{
        type: String,
        require: true,
    }
});

module.exports = moongose.model("Usuario", usuarioSchema);