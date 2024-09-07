const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
const ProductosRutas = require("./routes/Productos.Router.js")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const PORT = process.env.PORT || 3300;

app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/prod",ProductosRutas)


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})