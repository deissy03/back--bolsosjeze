// src/rutas/rutaInicioSesion.js
import express from "express";
import ControladorInicioSesion from "../controladores/controladorInicioSesion.js";

const enrutadorInicioSesion = express.Router();

// Ruta para iniciar sesión
enrutadorInicioSesion.post("/", ControladorInicioSesion.iniciarSesion);

export default enrutadorInicioSesion;
