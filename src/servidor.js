import path from "path";
import express from "express";
import express from "express";  
import morgan from "morgan";
import cors from "cors";

// Importa las rutas
import enrutadorUsuarios from "./rutas/rutaUsuarios.js";
import enrutadorInicioSesion from "./rutas/rutaInicioSesion.js";
import enrutadorProductos from "./rutas/rutaProductos.js";

const servidor = express();

// Configuración CORS para permitir solo tu frontend
servidor.use(cors({
  origin: (origin, callback) => {
    callback(null, true); // Permitir cualquier origen
  },
  credentials: true
}));




//const corsOptions = {
  //origin: "https://bolsosjeze.com",
  //methods: ["GET", "POST", "PUT", "DELETE"],
  //credentials: true,
//};//

servidor.use(cors(corsOptions));
servidor.use(morgan("dev"));
servidor.use(express.json());

// ✅ Rutas de API
servidor.use('/productos', enrutadorProductos);
servidor.use('/usuarios', enrutadorUsuarios);
servidor.use('/inicio-sesion', enrutadorInicioSesion);

// ✅ Ruta correcta para servir imágenes desde la carpeta `imagenes/` del backend
servidor.use('/imagenes', express.static(path.resolve('imagenes'))); //imagenes prublicas

// Ruta raíz para no encontrados
servidor.get('/', (req, res) => {
  res.status(404).send("No encontrado");
});

export default servidor;
// Middlewares
servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(express.json());


// Rutas principales
servidor.use('/productos', enrutadorProductos);
servidor.use('/usuarios', enrutadorUsuarios);
servidor.use('/inicio-sesion', enrutadorInicioSesion);


// Rutas públicas para imágenes
servidor.use('/imagenes', express.static(path.resolve('imagenes')));

// Ruta para el certificado SSL de Let's Encrypt
servidor.use('/.well-known/acme-challenge', express.static('/var/www/html/.well-known/acme-challenge'));

// Ruta base (devuelve 404)
servidor.get('/', (req, res) => {
  res.status(404).send("No encontrado");
});

// Ruta de prueba para confirmar que el servidor responde
servidor.get('/prueba', (req, res) => {
  res.send("Servidor activo ✅");
});

export default servidor;

