const express = require("express")
const router = express.Router()
const maquinasController = require("../controller/maquinas.controller")

router.post("/",maquinasController.create)
router.get("/",maquinasController.find)
router.get("/:id",maquinasController.findOne)
router.put("/:id",maquinasController.update)
router.delete("/:id",maquinasController.remove)
 

module.exports = router