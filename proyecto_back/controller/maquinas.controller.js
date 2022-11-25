const Maquina = require("../models/maquinas.model")

let response = { msg: "", exito: false }
exports.create = function (req, res) {
    let maquina = new Maquina({
        id_maquina: req.body.id_maquina,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        marca: req.body.marca,
        unidades: req.body.unidades,
        novedad: req.body.novedad,
        img: req.body.img

    })
    maquina.save(function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al guardar la maquina"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "La maquina se guardo correctamente"
        res.json(response)
    })
}
exports.find = function (req, res) {
    Maquina.find(function (err, maquinas) {
        res.json(maquinas)
    })
}
exports.findOne = function (req, res) {
    Maquina.findOne({ _id: req.params.id }, function (err, maquina) {
        res.json(maquina)
    })
}
exports.update = function (req, res) {
    let maquina = {
        id_maquina: req.body.id_maquina,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        marca: req.body.marca,
        unidades: req.body.unidades,
        novedad: req.body.novedad,
        img: req.body.img
    }
    Maquina.findByIdAndUpdate(req.params.id, { $set: maquina }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar la maquina"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "La maquina se modifico correctamente"
        res.json(response)
    })
}
exports.remove = function (req, res) {
    Maquina.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar la maquina"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "La maquina fue eliminado correctamente"
        res.json(response)
    })
}