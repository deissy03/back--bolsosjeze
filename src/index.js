import "dotenv/config";
import "./conexion.js";
import servidor  from "./servidor.js";

servidor.listen(3000, ()=>{
    console.log("El servidor se esta escuchando en el link http:localhost:3000:3000")
});