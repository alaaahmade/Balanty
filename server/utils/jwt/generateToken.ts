import { sign, Secret } from 'jsonwebtoken';

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
