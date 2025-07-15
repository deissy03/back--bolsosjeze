import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ModeloUsuario from '../modelos/modeloUsuario.js';

const LLAVE = process.env.JWT_SECRET || 'llave-por-defecto';

const ControladorInicioSesion = {
  iniciarSesion: async (solicitud, respuesta) => {
    try {
      const { username, password } = solicitud.body;
      console.log("📥 Login recibido:", username, password);

      const usuarioEncontrado = await ModeloUsuario.findOne({
        correoElectronico: username,
      });

      if (!usuarioEncontrado) {
        console.log("❌ Usuario no encontrado");
        return respuesta.json({
          resultado: 'mal',
          mensaje: 'usuario no encontrado',
          datos: null,
        });
      }

      const contraseniaValidada = await bcryptjs.compare(
        password,
        usuarioEncontrado.contrasenia
      );

      console.log("🔐 Contraseña válida:", contraseniaValidada);

      if (contraseniaValidada) {
        const token = jwt.sign(
          {
            id: usuarioEncontrado._id,
            name: usuarioEncontrado.nombre,
          },
          LLAVE,
          { expiresIn: '1h' }
        );

        respuesta.json({
          resultado: 'bien',
          mensaje: 'acceso permitido',
          datos: token,
        });
      } else {
        respuesta.json({
          resultado: 'mal',
          mensaje: 'contraseña incorrecta',
          datos: null,
        });
      }
    } catch (error) {
      console.error("❗️ Error en login:", error);
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al iniciar sesión',
        datos: error,
      });
    }
  }
};

export default ControladorInicioSesion;



