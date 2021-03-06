const express = require ('express')
const controller = require ('../../controllers/users/controller')

const rout = express.Router();
const jsonParser = express.json()
rout.get('/showall_user',jsonParser,controller.indexClients);
rout.get('/showall_rol',jsonParser,controller.indexRol);
rout.post('/addUser',jsonParser, controller.addUser);
rout.get('/:_id',jsonParser,controller.getUserById);
rout.delete('/:_id',jsonParser,controller.deleteUser);
rout.put('/:_id',jsonParser,controller.editUser);

rout.post('/addrol',jsonParser, controller.addRol);




module.exports = rout;