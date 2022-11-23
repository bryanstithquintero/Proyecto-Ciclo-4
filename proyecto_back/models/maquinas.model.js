const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaquinasSchema = new Schema({
    id_maquina: { type: String, require: true, max: 60 },
    nombre: { type: String, require: true, max: 60 },
    categoria: { type: String, require: true, max: 60 },
    marca: { type: String, require: true, max: 40 },
    unidades: { type: Number, require: true, max: 150 },
    novedad: { type: String, require: false, max: 15 },
});

module.exports = mongoose.model("maquinas", MaquinasSchema);