// src/helpers/funciones.js

import jwt from 'jsonwebtoken';

const LLAVE = process.env.JWT_SECRET || 'llave-por-defecto';

export function generarToken(payload) {
  return new Promise((resolver, rechazar) => {
    jwt.sign(payload, LLAVE, { expiresIn: '1h' }, (error, token) => {
      if (error) {
        rechazar(error);
      } else {
        resolver(token);
      }
    });
  });
}

export function verificarToken(token) {
  return new Promise((resolver, rechazar) => {
    jwt.verify(token, LLAVE, (error, decodificado) => {
      if (error) {
        rechazar(error);
      } else {
        resolver(decodificado);
      }
    });
  });
}
