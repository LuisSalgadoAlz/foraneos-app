const express = require("express");
const app = express();
const indexRoutes = require("./routes/index.routes.js");
const cors = require('cors');
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Aquí especifica el dominio permitido
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(indexRoutes);

module.exports = app;