
import servidor from "./servidor.js";
import mongoose from "mongoose";
import "dotenv/config.js";

const PUERTO = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
  .then(() => {
    console.log("esta conectado a la base de datos");

    servidor.listen(PUERTO, () => {
      console.log(`✅ Servidor escuchando en http://0.0.0.0:${PUERTO}`);
      console.log(`👉 Prueba: curl http://localhost:${PUERTO}/prueba`);
    });
  })
  .catch(error => {
    console.error("Error de conexión:", error);
  });

import "dotenv/config";
import "./conexion.js";
import servidor from "./servidor.js";

// Escucha en todas las interfaces (requerido para acceso externo desde Nginx)
servidor.listen(3000, '0.0.0.0', () => {
    console.log("✅ El servidor está escuchando en http://0.0.0.0:3000");
    // Ruta de prueba (sanity check)
servidor.get("/prueba", (req, res) => {
  res.send("✅ Servidor activo");
});

servidor.listen(PUERTO, HOST, () => {
  console.log(`✅ Servidor escuchando en http://${HOST}:${PUERTO}`);
  console.log("👉 Prueba: curl http://localhost:" + PUERTO + "/prueba");
});
});

