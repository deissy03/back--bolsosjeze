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

