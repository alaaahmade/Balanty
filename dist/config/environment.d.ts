import 'dotenv/config';
import { Dialect } from 'sequelize';
declare const SECRET_KEY: string | undefined;
export declare const nodeEnv: string | undefined;
export declare const PORT: string | undefined;
export declare const BUILD_DB: string | undefined;
export declare const EMAIL: string | undefined, EMAIL_PASSWORD: string | undefined, PRODUCT: string | undefined, PRODUCT_LINK: string | undefined;
interface connectionOption {
    dialect: Dialect;
    dialectOptions: {
        charset: string;
        ssl: boolean | object;
    };
}
export { SECRET_KEY };
export declare const sequelizeOption: connectionOption;
export declare let dbUrl: string;
declare const _default: {
    SECRET_KEY: string;
};
export default _default;
