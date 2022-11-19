const routes = require("express").Router()
const TaskController = require("../controller/TaskController")
const UsuarioController = require("../controller/UsuarioController")



routes.get("/", UsuarioController.setUser);
routes.post("/registro", UsuarioController.createUser);
routes.get("/home", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id/:method", TaskController.getById);
routes.post("/updateOne/:id", TaskController.updateOneTask);
routes.get("/deleteOne/:id", TaskController.deleteOneTask);


module.exports = routes;