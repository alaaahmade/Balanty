import { sign, Secret } from 'jsonwebtoken';
import { promisify } from 'util';

// const aa =  promisify()

const generateToken = (payload: object): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    sign(payload, process.env.SECRET_KEY as Secret, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token as string);
      }
    });
  });
};

export { generateToken };
