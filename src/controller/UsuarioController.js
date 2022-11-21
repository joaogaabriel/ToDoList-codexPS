const Usuario = require("../models/Usuario");
const User = require("../models/Usuario");
const usuario = require("../routes/routes");




  
const setUser = async(req, res) => {
    res.render("inicio");
    try{
        await User.findOne(req.body.email, req.body.senha)
    } catch{

    }
    const usuario = await req.body
}
    
    
const createUser = async (req, res) => {
    res.render("usuario");
    const {nome, email, senha} = req.body;
    let data = {};
    let user = await Usuario.findOne({email});
    if (!user){
        data = {nome, email, senha};

        user = await Usuario.create(data);
        return res.status(200).json(user);
    }else{
        return res.status(500);
    }
}







  
module.exports = {
    createUser,
    setUser,
    
  };

  