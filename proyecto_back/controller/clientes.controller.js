const Cliente = require("../models/clientes.model")

let response = { msg: "", exito: false }
exports.create = function (req, res) {
    let cliente = new Cliente({
        id_cliente: req.body.id_cliente,
        nombre: req.body.nombre,
        apellido_1: req.body.apellido_1,
        apellido_2: req.body.apellido_2,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion,
        password: req.body.password
    })
    cliente.save(function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al guardar el usario"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "El usuario se guardo correctamente"
        res.json(response)
    })
}
exports.find = function (req, res) {
    Cliente.find(function (err, clientes) {
        res.json(clientes)
    })
}
exports.findOne = function (req, res) {
    Cliente.findOne({ _id: req.params.id }, function (err, cliente) {
        res.json(cliente)
    })
}
exports.update = function (req, res) {
    let cliente = {
        id_cliente: req.body.id_cliente,
        nombre: req.body.nombre,
        apellido_1: req.body.apellido_1,
        apellido_2: req.body.apellido_2,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion,
        password: req.body.password
    }
    Cliente.findByIdAndUpdate(req.params.id, { $set: cliente }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar el usuario"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "El usuario se modifico correctamente"
        res.json(response)
    })
}
exports.remove = function (req, res) {
    Cliente.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar el usuario"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "El usuario fue eliminado correctamente"
        res.json(response)
    })
}
