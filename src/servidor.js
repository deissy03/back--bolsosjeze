import path from "path";
import express from "express";
import morgan from "morgan";
import cors from "cors";

// Importa las rutas
import enrutadorUsuarios from "./rutas/rutaUsuarios.js";
import enrutadorInicioSesion from "./rutas/rutaInicioSesion.js";
import enrutadorProductos from "./rutas/rutaProductos.js";

const servidor = express();

// Activar CORS para todas las peticiones
servidor.use(cors({
  origin: true,
  credentials: true
}));

// Logs de solicitudes y parseo de JSON
servidor.use(morgan("dev"));
servidor.use(express.json());

// Rutas de la API
servidor.use('/productos', enrutadorProductos);
servidor.use('/usuarios', enrutadorUsuarios);
servidor.use('/inicio-sesion', enrutadorInicioSesion);

// Servir imágenes estáticas desde la carpeta "imagenes"
servidor.use('/imagenes', express.static(path.resolve('imagenes')));

// Ruta de prueba para verificar que el servidor responde
servidor.get('/prueba', (req, res) => {
  res.send("Servidor activo ✅");
});

// Ruta base responde 404 si no se encuentra
servidor.get('/', (req, res) => {
  res.status(404).send("No encontrado");
});

export default servidor;


