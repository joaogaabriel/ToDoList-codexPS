const { response } = require("express");
const User = require("../models/User");
const jsonwebtoken = require("jsonwebtoken");

const registerUser = async (req, res) => {  
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return {erro: "Dados insuficientes."};
    }

    Find = await User.find({ email, password })
        .then(response =>{
            return response;
        }).catch(erro => {
            return {erro: erro}
        });

    if (Find == '' || Find.erro) {
        return { erro: "E-mail ou senha incorretos."}
    }

    Token = await jsonwebtoken.sign({
            id: Find[0]._id,
            nome: Find[0].nome,
            email: Find[0].email,
    }, "aqflasdfasdasf");

    res.cookie("Token", Token);
    res.sendStatus(200);
}

module.exports = {
    registerUser,
  };