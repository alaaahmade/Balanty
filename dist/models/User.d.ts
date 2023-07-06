import { Model } from 'sequelize';
import Review from './Review';
declare class User extends Model {
    id?: number;
    email: string;
    username: string;
    password: string;
    phone: string;
    role: 'player' | 'stadium';
    StadiumsReviews: Review[] | number;
}
export default User;
