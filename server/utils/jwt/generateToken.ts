import { sign, Secret } from 'jsonwebtoken';
import { SECRET_KEY } from '../../config';

const generateToken = (payload: object): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    sign(payload, SECRET_KEY as Secret, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token as string);
      }
    });
  });
};

export { generateToken };
