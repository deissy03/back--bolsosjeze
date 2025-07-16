import mongoose from "mongoose";
import servidor from "./servidor.js";
import "dotenv/config.js";

const PUERTO = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
  .then(() => {
    console.log("✅ Conectado a la base de datos");
    servidor.listen(PUERTO, '0.0.0.0', () => {
      console.log(`✅ Servidor escuchando en http://0.0.0.0:${PUERTO}`);
    });
  })
  .catch(error => console.error("❌ Error de conexión:", error));


