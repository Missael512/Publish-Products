const express = require("express");
const router = express.Router();
const {SayHi} = require("../controllers/Productos.Controllers.js")


router.get("/hi",SayHi)

module.exports=router