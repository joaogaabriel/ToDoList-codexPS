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
    const usuario = await new User({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    })
    usuario.save(function(err){
        if(err){
            console.log(err)
        } else{
            res.redirect("/")
        }
    })

} 







  
module.exports = {
    createUser,
    setUser,
    
  };

  