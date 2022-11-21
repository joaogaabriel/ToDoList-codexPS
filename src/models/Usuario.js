const  moongose = require("mongoose")
const bcrypt = require("bcrypt")

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
},{
    timestamps: true
});

usuarioSchema.pre('save', function(next){
    if(!this.isModified("senha")){
        return next();
    }
    this.senha = bcrypt.hashSync(this.senha, 10)
    next();
});

module.exports = moongose.model("Usuario", usuarioSchema);