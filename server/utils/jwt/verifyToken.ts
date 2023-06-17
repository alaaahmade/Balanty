import jwt from 'jsonwebtoken';
import environment from '../../config/environment';
const verifyToken = (token: string) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, environment.SECRET_KEY, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });

export default verifyToken;
