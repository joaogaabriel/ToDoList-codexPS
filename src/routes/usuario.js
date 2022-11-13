const routes = require("express").Router()
const UserController = require("../controller/UserController")

routes.post("/logar", UserController.registerUser)

module.exports = routes;