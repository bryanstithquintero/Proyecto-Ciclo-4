const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientesSchema = new Schema({
    id_cliente:{type:String,require:true,max:150},
    nombre:{type:String, require:true, max:60},
    apellido_1:{type:String, require:true, max:40},
    apellido_2:{type:String, require:true, max:40},
    telefono:{type:String, require:true, max:15},
    mail:{type:String, require:false, max:70},
    direccion:{type:String, require:false, max:150}
});

module.exports = mongoose.model("clientes",ClientesSchema); 